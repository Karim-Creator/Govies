import React from 'react'
import { MDBNavbar,MDBView, MDBMask,MDBBtn } from 'mdbreact';
import { NavbarBrand } from '../Navbar/NavbarElements'
import { BrowserRouter as Link } from 'react-router-dom';
import { MDBContainer, MDBCol, MDBCardBody,MDBFooter, MDBRow } from 'mdbreact';
import {FaFacebookF} from 'react-icons/fa'
import styled from 'styled-components'

const Container = styled.div`
    background: transparent;
`
const EmailH1 = styled.div`
    color: #fff;
    font-size: 20px;
`

const SignBtn = styled.button`
    background: #DD0611;
    color: white;
    cursor: pointer;
    display: flex;
    border: none;
    outline: none;
    white-space: nowrap;
    border-radius: 5px;
    justify-content: center;
    padding: 10px 20px;
    width: 350px;
`

const SignIn = () => {
    return (
        <>
        {/* Navbar Begin */}
        <MDBNavbar dark expand="md" scrolling fixed="top">
            <NavbarBrand href="/" style={{width:'100%'}}>
                    <Link to={'/'} className="nav-link" onClick={() => {window.location.href="/"}} style={{color: "#DD0611"}}> Govies </Link>
            </NavbarBrand>
        </MDBNavbar>
        {/* Navbar Ends */}

        {/* Hero Begin */}
        <MDBView src="https://www.analyticsindiamag.com/wp-content/uploads/2019/04/ntflxx.png">
        <MDBMask overlay="black-strong" className="flex-center flex-column text-white text-center">

        {/* SignIn Begin */}
        <MDBContainer className='mt-5 mb-5'
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
        <MDBCol md="5" className="center mt-5 mb-5" style={{backgroundColor: 'rgba(8, 8, 8, 0.856)'}}>
            <MDBCardBody className="ml-3 mt-5">
              <form className="bg-transparent">
                <p className="h2 text-left py-4" style={{color: '#fff', fontWeight:'700'}}>Sign In</p>
                <input
                  type="text"
                  id="EmailInput"
                  className="form-control ml-1"
                  style={{backgroundColor: '#333333',color:'#8C8C75',border:'none',height: '50px',width:'350px'}}
                  value="Email or Phone Number"
                />
                <br />
                <input
                  type="email"
                  id="PasswordInput"
                  className="form-control ml-1"
                  style={{backgroundColor: '#333333',color:'#8C8C75',border:'none',height: '50px',width:'350px'}}
                  value="Password"
                />
                <div className="text-center py-4 mt-2" style={{marginRight:'100px'}}>
                  <SignBtn type="submit">
                    Sign In
                  </SignBtn>
                </div>
                <div>
                    <div class="custom-control custom-checkbox custom-control-inline">
                        <input type="checkbox" class="custom-control-input" id="defaultInline1" checked/>
                        <label class="custom-control-label" for="defaultInline1" style={{color:'#737373'}}>Remember me</label>
                        <label for="defaultInline2" style={{color:'#737373',marginLeft:'130px'}}><a>Need Help?</a></label>
                    </div>
                </div>
              </form>
              <div className="text-left ml-2 mt-5" style={{color:'#737373'}}>
                <FaFacebookF className="fa-2x" style={{color: '#fff',background:'#3B579D', fontSize:'20px',marginRight:'5px'}}/> Login With Facebook 
                <p className="mt-3 mb-2" style={{fontSize:'14px'}}>New to Netflix? <a href="/" style={{color:'#fff'}}>Sign Up Now</a></p>
                <p style={{fontSize:'14px'}}>This page is protected by Google reCAPTCHA to <br></br>ensure you're not a bot.<a href="">Learn more.</a></p>
              </div>
            </MDBCardBody>
        </MDBCol>
        </MDBContainer>
        </MDBMask>
          </MDBView>
        {/* SignIn End */}

        {/* Footer Begin */}
          <MDBFooter className='text-white text-center text-lg-left' style={{backgroundColor: '#000'}}>
      <Container>
      <MDBContainer className='p-4'>
        <p style={{color:"#757575"}}>Questions? <a href="/" style={{color:"#757575"}}>Contact us.</a> </p>
        <MDBRow>
        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <ul className='list-unstyled'>
              <li style={{paddingBottom: "10px"}}>
                <a href='//' style={{color:"#757575"}}>
                FAQ
                </a>
              </li>
              <li>
                <a href='//' style={{color:"#757575"}}>
                Cookie Preferences
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

            <ul className='list-unstyled'>
              <li style={{paddingBottom: "10px"}}>
                <a href='//' style={{color:"#757575"}}>
                Help Center
                </a>
              </li>
              <li>
                <a href='//' style={{color:"#757575"}}>
                Corporate Information
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

            <ul className='list-unstyled mb-0'>
              <li style={{paddingBottom: "10px"}}>
                <a href='//' style={{color:"#757575"}}>
                Terms of Use
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

            <ul className='list-unstyled'>
              <li style={{paddingBottom: "10px"}}>
                <a href='//' style={{color:"#757575"}}>
                Privacy
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      <div className='pb-3 pt-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <a style={{color:"#757575"}} href='/'>
          Govies Morocco
        </a>
      </div>
      </MDBContainer>

    </Container>
    </MDBFooter>
    {/* Footer End */}
        </>
    )
}

export default SignIn
