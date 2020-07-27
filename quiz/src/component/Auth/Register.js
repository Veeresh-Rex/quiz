import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { register, checkemail, checkusername } from './Auth';
import './registercss.css';
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      Confirmpassword: '',
      usernameError: false,
      passNotMatched: false,
      output: false,
      emailError: false,
      requiredUser: false,
      requiredPass: false,
      requiredEmail: false,
    };
  }
  onchange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({
      usernameError: false,
      passNotMatched: false,
      emailError: false,
      requiredUser: false,
      requiredEmail: false,
      requiredPass: false,
    });
  };
  onsubmit = (e) => {
    e.preventDefault();
    const { password, Confirmpassword } = this.state;

    console.log('Click');
    if (password !== Confirmpassword) {
      console.log(password + '  ' + Confirmpassword);
      this.setState({
        passNotMatched: true,
      });
    } else {
      const user = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      };

      if (user.username === '')
        this.setState({
          requiredUser: true,
        });
      if (user.email === '') {
        this.setState({
          requiredEmail: true,
        });
      }
      if (user.password === '') {
        this.setState({
          requiredPass: true,
        });
      } else {
        checkusername(user).then((res) => {
          console.log('check user ');
          if (res) {
            console.log('output  : ' + this.state.output);
            this.setState({
              usernameError: true,
            });
          } else {
            checkemail(user).then((res) => {
              console.log('check email');
              if (res) {
                this.setState({
                  usernameError: false,
                  emailError: true,
                });
              } else {
                this.setState({
                  usernameError: false,
                  emailError: false,
                });
                register(user).then((res) => {
                  this.props.history.push('/login');
                });
              }
            });
          }
        });
      }
    }
  };
  render() {
    const {
      usernameError,
      passNotMatched,
      requiredUser,
      requiredEmail,
      requiredPass,
      emailError,
    } = this.state;
    const requer = () => {
      return <p className='text-danger text-left font'>*Required</p>;
    };
    const err = () => {
      if (usernameError) {
        return (
          <p className='text-danger text-left font'>*Username Already exist</p>
        );
      } else {
        return null;
      }
    };
    const Emailerr = () => {
      if (emailError) {
        return (
          <p className='text-danger text-left font'>*Username Already exist</p>
        );
      } else {
        return null;
      }
    };

    const passError = () => {
      if (passNotMatched) {
        return (
          <p className='text-danger text-left font'>*password not matched</p>
        );
      } else {
        return null;
      }
    };
    return (
      <MDBContainer className='mt-5'>
        <MDBRow>
          <MDBCol md='6' size='10 mx-auto'>
            <form onSubmit={this.onsubmit}>
              <p className='h2 text-center mb-4'> Register</p>
              <label
                htmlFor='defaultFormRegisterNameEx'
                className='grey-text font-weight-bold'>
                Username
              </label>
              <input
                type='text'
                className='form-control'
                name='username'
                value={this.state.username}
                onChange={this.onchange}
              />
              {err()}
              {requiredUser ? requer() : null}
              <br />
              <label
                htmlFor='defaultFormRegisterEmailEx'
                className='grey-text font-weight-bold'>
                Email
              </label>
              <input
                type='email'
                onChange={this.onchange}
                name='email'
                className='form-control'
                value={this.state.email}
              />
              {requiredEmail ? requer() : null}
              {Emailerr()}
              <br />
              <label
                htmlFor='defaultFormRegisterPasswordEx'
                className='grey-text font-weight-bold'>
                Password
              </label>
              <input
                type='password'
                className='form-control'
                name='password'
                onChange={this.onchange}
                value={this.state.password}
              />
              {requiredPass ? requer() : null}
              <label
                htmlFor='defaultFormRegisterPasswordEx'
                className='grey-text font-weight-bold'>
                Confirm password
              </label>
              <input
                type='password'
                className='form-control'
                value={this.state.Confirmpassword}
                name='Confirmpassword'
                onChange={this.onchange}
              />
              {passError()}
              {requiredPass ? requer() : null}
              <div className='text-center mt-4'>
                <MDBBtn color='unique' type='submit'>
                  Register
                </MDBBtn>
              </div>
              <p className='font-small grey-text d-flex justify-content-center mt-5'>
                Already hava a account?
                <a
                  href='/login'
                  className='dark-grey-text font-weight-bold ml-1'>
                  Login
                </a>
              </p>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Register;
