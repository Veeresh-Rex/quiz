import React from 'react';
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
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
              <MDBCardTitle className='h2'>
                Material Design for Bootstrap
              </MDBCardTitle>
              <p className='blue-text my-4 font-weight-bold'>
                Powerful and free Material Design UI KIT
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
                <MDBBtn href='/login' color='primary' className='waves-effect'>
                  Login
                </MDBBtn>
                <MDBBtn
                  href='/register'
                  outline
                  color='primary'
                  className='waves-effect'>
                  Register
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
