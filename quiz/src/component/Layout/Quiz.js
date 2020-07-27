import React, { Component } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from 'mdbreact';
import python from '../../assest/image/python.png';
import cplus from '../../assest/image/c++.png';
import java from '../../assest/image/java.png';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <MDBContainer>
          <MDBRow>
            <MDBCol size='6' sm='4'>
              <MDBCol style={{ maxWidth: '22rem' }} className='pt-5 '>
                <MDBCard>
                  <MDBCardImage className='img-fluid' src={python} waves />
                  <MDBCardBody>
                    <MDBCardTitle>Python</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn href='#' className='text-center'>
                      Take Quiz
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCol>
            <MDBCol size='6' sm='4'>
              <MDBCol style={{ maxWidth: '22rem' }} className='pt-5 '>
                <MDBCard>
                  <MDBCardImage className='img-fluid' src={cplus} waves />
                  <MDBCardBody>
                    <MDBCardTitle>C++</MDBCardTitle>
                    <MDBCardText>
                      Take a quiz of c++ programming language
                    </MDBCardText>
                    <MDBBtn href='/quiz/QuizInstruction'>Take Quiz</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCol>
            <MDBCol size='6' sm='4'>
              <MDBCol style={{ maxWidth: '22rem' }} className='pt-5 '>
                <MDBCard>
                  <MDBCardImage className='img-fluid' src={java} waves />
                  <MDBCardBody>
                    <MDBCardTitle>Java</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn href='#'>Take Quiz</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    );
  }
}

export default Quiz;
