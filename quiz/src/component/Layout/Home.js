import React from 'react';
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
} from 'mdbreact';

const Home = () => {
  return (
    <MDBContainer className='mt-5 text-center'>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron>
            <MDBCardBody>
              <MDBCardTitle className='h2'>Quiz Hub</MDBCardTitle>
              <p className='blue-text my-4 font-weight-bold'>
                Test your programming skills
              </p>
              <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                aliquid dolorem ea distinctio exercitationem delectus qui, quas
                eum architecto, amet quasi accusantium, fugit consequatur
                ducimus obcaecati numquam molestias hic itaque accusantium
                doloremque laudantium, totam rem aperiam.
              </MDBCardText>
              <hr className='my-4' />
              <div className='pt-2'>
                <MDBBtn href='/c++/quiz' color='success' className='btn'>
                  Start Quiz
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Home;
