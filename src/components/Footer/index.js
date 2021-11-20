import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import styled from 'styled-components'

const Container = styled.div`
    padding: 10px;
`

const Footer = () => {
  return (
    <MDBFooter className='text-white text-center text-lg-left' style={{background:"#000"}}>
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
              <li style={{paddingBottom: "10px"}}>
                <a href='//' style={{color:"#757575"}}>
                Investor Relations
                </a>
              </li>
              <li style={{paddingBottom: "10px"}}>
                <a href='//' style={{color:"#757575"}}>
                Privacy
                </a>
              </li>
              <li>
                <a href='//' style={{color:"#757575"}}>
                Speed Test
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
              <li style={{paddingBottom: "10px"}}>
                <a href='//' style={{color:"#757575"}}>
                Jobs
                </a>
              </li>
              <li style={{paddingBottom: "10px"}}>
                <a href='//' style={{color:"#757575"}}>
                Cookie Preferences
                </a>
              </li>
              <li>
                <a href='//' style={{color:"#757575"}}>
                Legal Notices
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

            <ul className='list-unstyled mb-0'>
              <li style={{paddingBottom: "10px"}}>
                <a href='//' style={{color:"#757575"}}>
                Account
                </a>
              </li>
              <li style={{paddingBottom: "10px"}}>
                <a href='//' style={{color:"#757575"}}>
                Ways to Watch
                </a>
              </li>
              <li style={{paddingBottom: "10px"}}>
                <a href='//' style={{color:"#757575"}}>
                Corporate Information
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

            <ul className='list-unstyled'>
              <li style={{paddingBottom: "10px"}}>
                <a href='//' style={{color:"#757575"}}>
                Media Center
                </a>
              </li>
              <li style={{paddingBottom: "10px"}}>
                <a href='//' style={{color:"#757575"}}>
                Terms of Use
                </a>
              </li>
              <li style={{paddingBottom: "10px"}}>
                <a href='//' style={{color:"#757575"}}>
                Contact Us
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
  );
}

export default Footer;