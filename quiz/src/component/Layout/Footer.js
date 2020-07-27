import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';

const FooterPagePro = () => {
  return (
    <MDBFooter
      color='unique-color-dark'
      className='page-footer font-small pt-0 mt-5'>
      <div style={{ backgroundColor: '#6351ce' }}>
        <MDBContainer fluid className='text-center text-md-left'>
          <MDBRow className='py-4 d-flex align-items-center'>
            <MDBCol
              md='6'
              lg='5'
              className='text-center text-md-left mb-4 mb-md-0'>
              <h6 className='mb-0 white-text'>
                Get connected with us on social networks!
              </h6>
            </MDBCol>
            <MDBCol
              md='6'
              lg='7'
              className='text-center text-md-right'></MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className='mt-5 mb-4 text-center text-md-left'>
        <MDBRow className='mt-3'>
          <MDBCol md='3' lg='4' xl='3' className='mb-4'>
            <h6 className='text-uppercase font-weight-bold'>
              <strong>Quiz Hub</strong>
            </h6>
            <hr
              className='deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto'
              style={{ width: '60px' }}
            />
            <p>
              Here you can use rows and columns here to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </MDBCol>
          <MDBCol md='2' lg='2' xl='2' className='mb-4'>
            <h6 className='text-uppercase font-weight-bold'>
              <strong>Products</strong>
            </h6>
            <hr
              className='deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto'
              style={{ width: '60px' }}
            />
            <p>
              <a href='#!'> link</a>
            </p>
            <p>
              <a href='#!'>link</a>
            </p>
          </MDBCol>
          <MDBCol md='3' lg='2' xl='2' className='mb-4'>
            <h6 className='text-uppercase font-weight-bold'>
              <strong>Useful links</strong>
            </h6>
            <hr
              className='deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto'
              style={{ width: '60px' }}
            />
            <p>
              <a href='#!'>Your Account</a>
            </p>
            <p>
              <a href='#!'>Become an Affiliate</a>
            </p>
            <p>
              <a href='#!'>Shipping Rates</a>
            </p>
            <p>
              <a href='#!'>Help</a>
            </p>
          </MDBCol>
          <MDBCol md='4' lg='3' xl='3' className='mb-4'>
            <h6 className='text-uppercase font-weight-bold'>
              <strong>Contact</strong>
            </h6>
            <hr
              className='deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto'
              style={{ width: '60px' }}
            />
            <p>
              <i className='fa fa-home mr-3' /> Maharana Pratap Engineering
              College
            </p>
            <p>
              <i className='fa fa-envelope mr-3' /> mauryaveeresh@gmail.com
            </p>
            <p>
              <i className='fa fa-phone mr-3' /> XXXXXXXXXXX
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className='footer-copyright text-center py-3'>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a href='localhost:3001'> Quiz Hub </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPagePro;
