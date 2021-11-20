import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBContainer, MDBView, MDBMask,MDBInputGroup,MDBBtn } from 'mdbreact';
import { BrowserRouter as Router,Link } from 'react-router-dom';
import styled from 'styled-components'
import { NavbarBrand,NavbarBtn,MDBH2,MDBP,EmailBtn } from './NavbarElements'

const Container = styled.div`
    background: transparent;
    margin-top: 20px;
`
const EmailH1 = styled.div`
    color: #fff;
    font-size: 20px;
`

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <Router>
          <MDBNavbar color="black" fixed="top" dark expand="md" scrolling transparent>
                <MDBContainer>
                  <NavbarBrand href="/">
                    <Link to={'/'} className="nav-link" onClick={() => {window.location.href="/"}} style={{color: "#DD0611"}}> Govies </Link>
                  </NavbarBrand>
                  <MDBNavbarToggler onClick={this.onClick} />
                  <MDBCollapse isOpen={this.state.collapse} navbar>
                    <MDBNavbarNav right>
                      <MDBNavItem>
                        <NavbarBtn> 
                        <Link to={'/SignIn'} onClick={() => {window.location.href="/SignIn"}} className="nav-link"> SignIn </Link>
                        </NavbarBtn>
                      </MDBNavItem>
                    </MDBNavbarNav>
                  </MDBCollapse>
                </MDBContainer>
              </MDBNavbar>
            
          <MDBView src="https://www.analyticsindiamag.com/wp-content/uploads/2019/04/ntflxx.png">
            <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
              <MDBH2>Unlimited movies, TV </MDBH2>
              <MDBH2>shows, and more.</MDBH2>
              <MDBP>Watch anywhere. Cancel anytime.</MDBP>
              <Container >
                <EmailH1 className="text-center">
                Ready to watch? Enter your email to create or restart your membership.
                </EmailH1>
            <MDBInputGroup
          hint="Email Address"
          style= {{width: "90%"}}
          containerClassName="mb-3 mt-4 mx-auto"
          className= "py-4"
          append={
            <>
              <EmailBtn
              color="red"
              className="m-0 px-4 z-depth-0"
            >
              Get Started
            </EmailBtn>
            </>
          }
        />
      </Container>

            </MDBMask>
          </MDBView>
          </Router>
      </div>
    );
  }
}

export default Navbar;