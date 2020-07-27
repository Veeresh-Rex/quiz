import React, { Component } from 'react';
import { MDBIcon } from 'mdbreact';
import { MDBBtn, MDBTypography, MDBContainer } from 'mdbreact';
import { Helmet } from 'react-helmet';
class QuizInstruction extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Helmet>
          <title>Quiz Instructions - Quiz App</title>
        </Helmet>
        <div className='jumbotron text-center blue-grey lighten-5'>
          <MDBIcon icon='book-reader' className='fa-8x green-text mt-2 mb-4' />
          <h2 className='card-title h2 '>Quiz Instructions</h2>
          <MDBContainer>
            <p className=' my-4 font-weight-bold remark '></p>
            <div className='row d-flex justify-content-center'>
              <div className='col-xl-7 pb-2'>
                <br />
                <p className='card-text'>
                  <ul>
                    <MDBTypography listUnStyled>
                      <li>
                        The game has a duration of 15 minutes and ends as soon
                        as your time elapses.
                      </li>
                      <li>Each game consists of 15 questions.</li>
                      <li>
                        Every question contains 4 options.
                        <li>
                          Select the option which best answers the question by
                          clicking (or selecting) it.
                        </li>
                        <li>
                          Selecting a 50-50 lifeline by clicking the icon will
                          remove 2 wrong answers, leaving the correct answer and
                          one wrong answer
                        </li>
                        <li>
                          Using a hint by clicking the icon will remove one
                          wrong answer leaving two wrong answers and one correct
                          answer. You can use as many hints as possible on a
                          single question.
                        </li>
                        <li>
                          Feel free to quit (or retire from) the game at any
                          time. In that case your score will be revealed
                          afterwards.
                        </li>
                        <li>The timer starts as soon as the game loads.</li>
                        <li>
                          Let's do this if you think you've got what it takes?
                        </li>
                      </li>
                    </MDBTypography>
                  </ul>
                </p>
              </div>
            </div>
          </MDBContainer>
          <hr className='my-4 pb-2' />

          <MDBBtn href='/' color='secondary' className='btn'>
            Back To Home
          </MDBBtn>
          <MDBBtn href='/c++/quiz' color='success' className='btn'>
            Play
          </MDBBtn>
        </div>
      </>
    );
  }
}

export default QuizInstruction;
