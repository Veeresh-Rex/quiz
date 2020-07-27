import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
  MDBRow,
  MDBCol,
} from 'mdbreact';

import './NavbarPage.css';
class NavbarPage extends Component {
  state = {
    isOpen: false,
  };
  logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('usertoken');
    this.props.history.push('/');
  };
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const before = (
      <>
        <MDBNavItem>
          <MDBNavLink active className='black-text' to='/login'>
            Login
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink className='black-text' to='/register'>
            Register
          </MDBNavLink>
        </MDBNavItem>
      </>
    );
    const after = (
      <>
        <MDBNavItem>
          <MDBNavLink className='black-text' to='/quiz/QuizInstruction'>
            Quiz
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink className='black-text' to='#!'>
            About Me
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink className='black-text' to='' onClick={this.logout}>
            Logout
          </MDBNavLink>
        </MDBNavItem>
      </>
    );
    return (
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol size='10 mx-auto'>
            <section className='costom'>
              <MDBNavbar className='navbar' dark expand='md'>
                <MDBNavbarBrand href='/'>
                  <strong className='black-text'> Quiz Hub</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler
                  className='toggel'
                  onClick={this.toggleCollapse}
                />
                <MDBCollapse
                  id='navbarCollapse3'
                  isOpen={this.state.isOpen}
                  navbar>
                  <MDBNavbarNav
                    right
                    className='nav-nav-bar font-weight-bold  '>
                    {localStorage.usertoken ? after : before}
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBNavbar>
            </section>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default withRouter(NavbarPage);
