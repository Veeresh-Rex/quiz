import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import './ResultPage.css';
import { MDBIcon } from 'mdbreact';
import { MDBBtn } from 'mdbreact';
class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      numberOfQuestions: 0,
      numberOfAnsweredQuestions: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      hintsUsed: 0,
      fiftyFiftyUsed: 0,
    };
  }

  componentDidMount() {
    const { state } = this.props.location;
    if (state) {
      this.setState({
        score: (state.score / state.numberOfQuestions) * 100,
        numberOfQuestions: state.numberOfQuestions,
        numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
        correctAnswers: state.correctAnswers,
        wrongAnswers: state.wrongAnswers,
      });
    }
  }

  render() {
    const { state } = this.props.location;
    let stats, remark;
    const userScore = this.state.score;
    if (userScore <= 30) {
      remark = 'You need more practice!';
    } else if (userScore > 30 && userScore <= 50) {
      remark = 'Better luck next time!';
    } else if (userScore <= 70 && userScore > 50) {
      remark = 'You can do better!';
    } else if (userScore >= 71 && userScore <= 84) {
      remark = 'You did great!';
    } else {
      remark = "You're an absolute genius!";
    }

    if (state !== undefined) {
      stats = (
        <div className='jumbotron text-center blue-grey lighten-5'>
          <MDBIcon
            far
            icon='check-circle'
            className='fa-8x green-text mt-2 mb-4'
          />
          <h2 className='card-title h2 '>Quiz Has Ended</h2>

          <p className=' my-4 font-weight-bold remark '>{remark}</p>
          <h2 className='  font-weight-bold score'>
            Your Score: {this.state.score.toFixed(0)}&#37;
          </h2>
          <div className='row d-flex justify-content-center'>
            <div className='col-xl-7 pb-2'>
              <br />
              <p className='card-text'>
                <span className='stat left'>Total number of questions: </span>
                <span className='right'>{this.state.numberOfQuestions}</span>
                <br />
                <span className='stat left'>
                  Number of attempted questions:{' '}
                </span>
                <span className='right'>
                  {this.state.numberOfAnsweredQuestions}
                </span>
                <br />
                <span className='stat left'>Number of Correct Answers: </span>
                <span className='right'>{this.state.correctAnswers}</span>{' '}
                <br />
                <span className='stat left'>Number of Wrong Answers: </span>
                <span className='right'>{this.state.wrongAnswers}</span>
              </p>
            </div>
          </div>

          <hr className='my-4 pb-2' />

          <MDBBtn href='/' color='secondary' className='btn'>
            Back To Home
          </MDBBtn>
          <MDBBtn href='/c++/quiz' color='success' className='btn'>
            Play Again
          </MDBBtn>
        </div>
      );
    } else {
      stats = (
        <section>
          <div className='jumbotron text-center blue-grey lighten-5'>
            <MDBIcon
              icon='exclamation-circle'
              className='red-text pr-3 mt-3 mb-5'
              size='4x'
            />
            <h2 className='card-title h2'>No Statistics Available</h2>

            <p className='indigo-text my-4 font-weight-bold'>
              Wanna To play a quiz
            </p>

            <div className='row d-flex justify-content-center'>
              <div className='col-xl-7 pb-2'>
                <p className='card-text'></p>
              </div>
            </div>

            <hr class='my-4 pb-2' />

            <MDBBtn href='/' color='secondary' className='btn'>
              Back To Home
            </MDBBtn>
            <MDBBtn href='/c++/quiz' color='success' className='btn'>
              Start Quiz
            </MDBBtn>
          </div>
        </section>
      );
    }
    return (
      <Fragment>
        <Helmet>
          <title>Quiz App - Summary</title>
        </Helmet>
        <div className='quiz-summary'>{stats}</div>
      </Fragment>
    );
  }
}

export default Result;
