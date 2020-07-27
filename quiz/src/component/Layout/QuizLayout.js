import React from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';
import swal from 'sweetalert';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBBtn,
  MDBIcon,
  MDBTypography,
  MDBBox,
} from 'mdbreact';
import classnames from 'classnames';
import isEmpty from '../Quiz/Isempty';
import { ToastContainer, toast } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.min.css';
import correctNotification from '../../assest/sounds/correct-answer.mp3';
import wrongNotification from '../../assest/sounds/wrong-answer.mp3';
import buttonSound from '../../assest/sounds/button-sound.mp3';
import './Quizlay.css';

class Quizlayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      currentQuestion: {},
      nextQuestion: {},
      previousQuestion: {},
      answer: '',
      alert: false,
      numberOfQuestions: 0,
      numberOfAnsweredQuestions: 0,
      currentQuestionIndex: 0,
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      nextButtonDisabled: false,
      previousButtonDisabled: true,
      previousRandomNumbers: [],
      time: {},
    };
    this.interval = null;
    this.correctSound = React.createRef();
    this.wrongSound = React.createRef();
    this.buttonSound = React.createRef();
  }

  /////This is component Did mount file

  componentDidMount() {
    this.getQues();

    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  getQues = () => {
    axios
      .get('http://localhost:8080/user/questions')
      .then((response) => {
        const data = response.data;
        this.setState({ questions: data });
        console.log('Data has been received!!' + data);
        this.displayQuestions(
          this.state.questions,
          this.state.currentQuestion,
          this.state.nextQuestion,
          this.state.previousQuestion
        );
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  };
  displayQuestions = (
    questions = this.state.questions,
    currentQuestion,
    nextQuestion,
    previousQuestion
  ) => {
    let { currentQuestionIndex } = this.state;
    console.log('this is Questions' + questions);
    if (!isEmpty(this.state.questions)) {
      questions = this.state.questions;
      currentQuestion = questions[currentQuestionIndex];
      nextQuestion = questions[currentQuestionIndex + 1];
      previousQuestion = questions[currentQuestionIndex - 1];
      const answer = currentQuestion.answer;
      this.setState(
        {
          currentQuestion,
          nextQuestion,
          previousQuestion,
          numberOfQuestions: questions.length,
          answer,
          previousRandomNumbers: [],
        },
        () => {
          this.showOptions();
          this.handleDisableButton();
        }
      );
    }
  };

  handleDisableButton = () => {
    if (
      this.state.previousQuestion === undefined ||
      this.state.currentQuestionIndex === 0
    ) {
      this.setState({
        previousButtonDisabled: true,
      });
    } else {
      this.setState({
        previousButtonDisabled: false,
      });
    }

    if (
      this.state.nextQuestion === undefined ||
      this.state.currentQuestionIndex + 1 === this.state.numberOfQuestions
    ) {
      this.setState({
        nextButtonDisabled: true,
      });
    } else {
      this.setState({
        nextButtonDisabled: false,
      });
    }
  };
  startTimer = () => {
    const countDownTime = Date.now() + 180000;
    this.interval = setInterval(() => {
      const now = new Date();
      const distance = countDownTime - now;

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(this.interval);
        this.setState(
          {
            time: {
              minutes: 0,
              seconds: 0,
            },
          },
          () => {
            this.endGame();
          }
        );
      } else {
        this.setState({
          time: {
            minutes,
            seconds,
            distance,
          },
        });
      }
    }, 1000);
  };

  showOptions = () => {
    const options = Array.from(document.querySelectorAll('.option'));
    options.forEach((option) => {
      option.style.visibility = 'visible';
    });
  };

  handleOptionClick = (e) => {
    if (e.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
      this.correctTimeout = setTimeout(() => {
        this.correctSound.current.play();
      }, 500);
      this.correctAnswer();
    } else {
      this.wrongTimeout = setTimeout(() => {
        this.wrongSound.current.play();
      }, 500);
      this.wrongAnswer();
    }
  };

  playButtonSound = () => {
    this.buttonSound.current.play();
  };

  correctAnswer = () => {
    toast.success('👍 Correct Answer', {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    this.setState(
      (prevState) => ({
        score: prevState.score + 1,
        correctAnswers: prevState.correctAnswers + 1,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1,
      }),
      () => {
        if (this.state.nextQuestion === undefined) {
          this.endGame();
        } else {
          this.displayQuestions(
            this.state.questions,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion
          );
        }
      }
    );
  };

  wrongAnswer = () => {
    toast.error("😢 Oops It's Wrong", {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    this.setState(
      (prevState) => ({
        wrongAnswers: prevState.wrongAnswers + 1,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1,
      }),
      () => {
        if (this.state.nextQuestion === undefined) {
          this.endGame();
        } else {
          this.displayQuestions(
            this.state.questions,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion
          );
        }
      }
    );
  };

  handleNextButtonClick = () => {
    this.playButtonSound();
    if (this.state.nextQuestion !== undefined) {
      this.setState(
        (prevState) => ({
          currentQuestionIndex: prevState.currentQuestionIndex + 1,
        }),
        () => {
          this.displayQuestions(
            this.state.state,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion
          );
        }
      );
    }
  };

  handlePreviousButtonClick = () => {
    this.playButtonSound();
    if (this.state.previousQuestion !== undefined) {
      this.setState(
        (prevState) => ({
          currentQuestionIndex: prevState.currentQuestionIndex - 1,
        }),
        () => {
          this.displayQuestions(
            this.state.state,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion
          );
        }
      );
    }
  };
  deleteFile = () => {
    this.props.history.push('/');
  };
  onCancel = () => {
    this.setState({
      alert: false,
    });
  };
  handleQuitButtonClick = () => {
    this.setState({
      alert: true,
    });
    console.log('Quit');
  };

  endGame = () => {
    setTimeout(() => {
      swal('Good job!', 'Click ok to see result', 'success');
      const { state } = this;
      const playerStats = {
        score: state.score,
        numberOfQuestions: state.numberOfQuestions,
        numberOfAnsweredQuestions: state.correctAnswers + state.wrongAnswers,
        correctAnswers: state.correctAnswers,
        wrongAnswers: state.wrongAnswers,
      };
      setTimeout(() => {
        this.props.history.push('/c++/result', playerStats);
      }, 500);
    }, 1000);
  };

  /// Option for disabling the button

  handleButtonClick = (e) => {
    switch (e.target.id) {
      case 'next-button':
        this.handleNextButtonClick();
        break;

      case 'previous-button':
        this.handlePreviousButtonClick();
        break;
      default:
        break;
    }
  };

  render() {
    const {
      currentQuestion,
      currentQuestionIndex,
      numberOfQuestions,
      time,
    } = this.state;

    const sweetAlert = (
      <>
        {
          <SweetAlert
            warning
            showCancel
            confirmBtnText='Quit '
            confirmBtnBsStyle='danger'
            title='Are you sure?'
            onConfirm={this.deleteFile}
            onCancel={this.onCancel}
            focusCancelBtn>
            You will lost your progress
          </SweetAlert>
        }
      </>
    );
    return (
      <>
        <MDBContainer>
          <ToastContainer />

          <Helmet>
            <title>Quiz Page</title>
          </Helmet>
          <audio ref={this.correctSound} src={correctNotification}></audio>
          <audio ref={this.wrongSound} src={wrongNotification}></audio>
          <audio ref={this.buttonSound} src={buttonSound}></audio>
          <MDBRow>
            <MDBCol md='2'></MDBCol>
            <MDBCol md='8' className='mt-5'>
              <MDBCard fluid className='main-card'>
                <MDBContainer>
                  <MDBRow size='12'>
                    <MDBCard className='question-num'>
                      {currentQuestionIndex + 1} of {numberOfQuestions}
                    </MDBCard>
                    <MDBCard className='d-flex flex-row justify-content-end  float-right timer'>
                      <span
                        className={classnames('right valid', {
                          warning: time.distance <= 120000,
                          invalid: time.distance < 30000,
                        })}>
                        {time.minutes}:{time.seconds}
                      </span>
                      <MDBIcon className='ml-2 mt-1' far icon='clock' />
                    </MDBCard>
                  </MDBRow>
                </MDBContainer>
                <MDBContainer className='mx-auto mt-5 '>
                  <MDBBox mb={0} className='bq-title'>
                    <h4 className='text-left'>
                      {currentQuestion.questionhead}
                    </h4>
                  </MDBBox>
                  {currentQuestion.question ? (
                    <MDBTypography
                      blockquote
                      bqColor='primary'
                      className='mt-3'>
                      <pre className='text-left '>
                        {currentQuestion.question}
                      </pre>
                    </MDBTypography>
                  ) : null}
                  <MDBContainer fluid className='mt-5 '>
                    <MDBRow>
                      <div className='option-cont'>
                        <p
                          onClick={this.handleOptionClick}
                          className='option mx-auto'>
                          {currentQuestion.optionA}
                        </p>
                        <p
                          onClick={this.handleOptionClick}
                          className='option mx-auto'>
                          {currentQuestion.optionB}
                        </p>
                      </div>
                      <div className='option-cont'>
                        <p
                          onClick={this.handleOptionClick}
                          className='option mx-auto'>
                          {currentQuestion.optionC}
                        </p>
                        <p
                          onClick={this.handleOptionClick}
                          className='option mx-auto'>
                          {currentQuestion.optionD}
                        </p>
                      </div>
                    </MDBRow>
                  </MDBContainer>
                </MDBContainer>
                <MDBContainer fluid className='mt-4 '>
                  <MDBBtn
                    color='primary'
                    className={classnames('btnquiz', {
                      'disabled ': this.state.previousButtonDisabled,
                    })}
                    id='previous-button'
                    onClick={this.handleButtonClick}>
                    Previous
                  </MDBBtn>
                  <MDBBtn
                    color='success'
                    className={classnames('btnquiz', {
                      'disabled ': this.state.nextButtonDisabled,
                    })}
                    id='next-button'
                    onClick={this.handleButtonClick}>
                    Next
                  </MDBBtn>
                  <MDBBtn
                    color='danger'
                    className='btnquizQuit'
                    id='quit-button'
                    onClick={this.handleQuitButtonClick}>
                    Quit {this.state.alert ? sweetAlert : null}
                  </MDBBtn>
                </MDBContainer>
              </MDBCard>
            </MDBCol>
            <MDBCol md='2'></MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    );
  }
}

export default Quizlayout;
