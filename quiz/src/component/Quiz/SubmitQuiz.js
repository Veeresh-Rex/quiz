import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { submitQuest } from '../Auth/Auth';
class SubmitQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionhead: '',
      question: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
      answerNum: '',
    };
  }
  Submit = (e) => {
    e.preventDefault();
    const user = {
      questionhead: this.state.questionhead,
      question: this.state.question,
      optionA: this.state.optionA,
      optionB: this.state.optionB,
      optionC: this.state.optionC,
      optionD: this.state.optionD,
      answerNum: this.state.answerNum,
    };
    console.log(user);
    submitQuest(user)
      .then((res) => {
        console.log('Submited');
      })
      .catch((err) => {
        console.log('Error :' + err);
      });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <MDBContainer>
        <h5 className='h1-responsive font-weight-bold text-center my-5'>
          Submit
        </h5>
        <MDBCol md='6'>
          <div className='form-group'>
            <label htmlFor='example1'> Question Heading</label>
            <input
              type='text'
              id='example1'
              className='form-control form-control-lg'
              name='questionhead'
              value={this.state.questionhead}
              onChange={this.handleChange}
            />
          </div>
        </MDBCol>
        <MDBRow>
          <MDBCol md='9' className='md-0 mb-5'>
            <form>
              <MDBRow>
                <MDBCol md='12'>
                  <div className='md-form mb-0'>
                    <MDBInput
                      type='textarea'
                      id='contact-message'
                      name='question'
                      value={this.state.question}
                      onChange={this.handleChange}
                      label='Code'
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='3'>
                  <div className='form-group'>
                    <label htmlFor='example1'>Option A</label>
                    <input
                      type='text'
                      id='example1'
                      className='form-control form-control-lg'
                      name='optionA'
                      value={this.state.optionA}
                      onChange={this.handleChange}
                    />
                  </div>
                </MDBCol>
                <MDBCol md='3'>
                  <div className='form-group'>
                    <label htmlFor='example1'>Option B</label>
                    <input
                      type='text'
                      id='example1'
                      className='form-control form-control-lg'
                      name='optionB'
                      value={this.state.optionB}
                      onChange={this.handleChange}
                    />
                  </div>
                </MDBCol>
                <MDBCol md='3'>
                  <div className='form-group'>
                    <label htmlFor='example1'>Option C</label>
                    <input
                      type='text'
                      id='example1'
                      className='form-control form-control-lg'
                      name='optionC'
                      value={this.state.optionC}
                      onChange={this.handleChange}
                    />
                  </div>
                </MDBCol>
                <MDBCol md='3'>
                  <div className='form-group'>
                    <label htmlFor='example1'>Option D</label>
                    <input
                      type='text'
                      id='example1'
                      className='form-control form-control-lg'
                      name='optionD'
                      value={this.state.optionD}
                      onChange={this.handleChange}
                    />
                  </div>
                </MDBCol>
              </MDBRow>

              <MDBCol md='3'>
                <div className='md-form mb-0'>
                  <MDBInput
                    type='number'
                    name='answerNum'
                    value={this.state.answerNum}
                    onChange={this.handleChange}
                  />
                </div>
              </MDBCol>
            </form>
            <div className='text-center text-md-left'>
              <MDBBtn
                color='primary'
                size='md'
                type='submit'
                onClick={this.Submit}>
                Send
              </MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default SubmitQuiz;
