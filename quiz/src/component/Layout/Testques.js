import React, { Component } from 'react';
import axios from 'axios';

class Testques extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: [],
    };
  }
  componentDidMount = () => {
    this.getQues();
  };
  getQues = () => {
    axios
      .get('http://localhost:8080/user/questions')
      .then((response) => {
        const data = response.data;

        this.setState({ question: data });
        console.log(this.state.question);
        console.log('Data has been received!!' + data);
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  };
  displayQuestion = (question) => {
    if (!question.length) return null;
    return question.map((question, index) => (
      <>
        {
          <div key={index}>
            <pre className='text-left'>{question.question} </pre>

            <pre>
              1.{question.optionA}
              2.{question.optionB}
              3.{question.optionC}
              4.{question.optionD}
            </pre>
            {console.log(index)}
          </div>
        }
      </>
    ));
  };
  render() {
    return (
      <>
        <h1>This is list of question</h1>
        {this.displayQuestion(this.state.question)}
      </>
    );
  }
}

export default Testques;
