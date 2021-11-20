import React from 'react'
import {MDBInputGroup } from 'mdbreact';
import {EmailBtn } from '../Navbar/NavbarElements'
import styled from 'styled-components';


const Container = styled.div`
    background: #000;
    margin-top: 100px;
`
const EmailH1 = styled.div`
    color: #fff;
    font-size: 20px;
`
const Email = () => {
    return (
        <>
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
        </>
    )
}

export default Email
