import React from 'react';
import { MDBContainer, MDBAlert, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { login } from './Auth';
import { withRouter } from 'react-router';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      err: false,
    };
  }
  onchange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({
      err: false,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      err: false,
    });
    const user = {
      username: this.state.username,
      password: this.state.password,
    };
    login(user)
      .then((res) => {
        if (res) {
          this.props.history.push('/quiz/QuizInstruction');
        } else {
          this.setState({
            err: true,
          });
        }
      })
      .catch((err) => {
        console.log('Error Login ' + err);
      });
  };
  render() {
    const error = (
      <MDBContainer>
        <MDBAlert color='warning' dismiss>
          <strong>Login Error !</strong> Incorrect Username or Password
        </MDBAlert>
      </MDBContainer>
    );
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md='6' size='10 mx-auto'>
            <form onSubmit={this.onSubmit}>
              <p className='h4 text-center mb-4'>Sign in</p>
              {this.state.err ? error : null}
              <label className='grey-text'>Username</label>
              <input
                type='text'
                className='form-control'
                name='username'
                value={this.state.username}
                onChange={this.onchange}
              />
              <br />
              <label htmlFor='defaultFormLoginPasswordEx' className='grey-text'>
                Your password
              </label>
              <input
                type='password'
                id='defaultFormLoginPasswordEx'
                name='password'
                value={this.state.password}
                className='form-control'
                onChange={this.onchange}
              />
              <div className='text-center mt-4'>
                <MDBBtn color='indigo' type='submit'>
                  Login
                </MDBBtn>
              </div>
              <p className='font-small grey-text d-flex justify-content-center'>
                Don't have an account?
                <a
                  href='/register'
                  className='dark-grey-text font-weight-bold ml-1'>
                  register
                </a>
              </p>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default withRouter(Login);
