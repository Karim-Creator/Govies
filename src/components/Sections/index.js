import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBView } from "mdbreact";
import { JumboTitle, MDBP } from './SectionsElements'
import VideoLooper from 'react-video-looper'
import { LineContainer } from "../Line/LineElements";
import Video from '../../Videos/video-1.m4v'
import Image from '../../images/image-3.jpg'
import styled from 'styled-components'
import Video3 from '../../Videos/video-3.mp4'
import Image2 from '../../images/image-4.png'

const ButtonSection = styled.button`
  background: #252525;
  border: none;
  color: #fff;
  border-radius: 5px;
  padding: 10px 40px;
  outline: none;
  margin-left: 130px;
  white-space: nowrap;

  @media screen and (max-width: 768px)
  {
    padding: 5px 20px;
    margin-left: 23%;
  }
`

const VideoBox = styled.div`
    position:relative;
    margin-bottom: 120px;

    @media screen and (max-width: 768px)
  {
    position:relative;
  }
`

const VideoOverlays = styled.div`
    position:absolute;
    top: 0;
    z-index:300000;
    right: 0px;

    @media screen and (max-width: 768px)
  {
    position:absolute;
    z-index:300000;
    margin-left: 350px;
  }
    
`

const VideoSection = styled.div`
    position:absolute;
    width: 250px;
    height: 150px;
    z-index:300000;
    top: 30px;
    right: 60px;
    text-align:center;

    @media screen and (max-width: 768px)
  {
    position:absolute;
    width: 250px;
    height: 120px;
    z-index:300000;
    top: 50px;
    right: 60px;
  }
`


const Sections = () => {
  return (
    <MDBCard className="my-0 pb-5"  style={{background:"#000"}}>
      <LineContainer />

      <MDBCardBody>
        <MDBRow className="mt-4 px-5">
          <MDBCol lg="5">
            <div className="embed-responsive embed-responsive-16by9">
            <VideoLooper title="embedsPage"  start={0} end={9.48} className="embed-responsive-item" src={Video}
            allowfullscreen></VideoLooper>
            </div>
              <a href="//">
                <MDBMask overlay="white-slight" />
              </a>
          </MDBCol>
          <MDBCol lg="7" >
            <JumboTitle className="font-weight-bold mb-3 mt-5 p-0 ">
              <strong>Enjoy on your TV.</strong>
            </JumboTitle>
            <MDBP>
            Watch on Smart TVs, Playstation, Xbox,
            </MDBP>
            <MDBP>
            Chromecast, Apple TV, Blu-ray players, and more.
            </MDBP>
          </MDBCol>
        </MDBRow>
        
        
        <MDBRow>
          <LineContainer className="mt-5 mb-5"/>
          <MDBCol lg="7">
            <JumboTitle className="font-weight-bold mb-3 pt-5 px-5"  style={{textAlign:"right"}}>
              <strong>Download your shows to watch offline.</strong>
            </JumboTitle>
            <MDBP className="px-5"  style={{textAlign:"right"}}>
            Save your favorites easily and always have 
            </MDBP>
            <MDBP className="px-5"  style={{textAlign:"right"}}>
            something to watch.
            </MDBP>
          </MDBCol>
          <MDBCol lg="5">
              <img
                className="img-fluid"
                src={Image}
                alt=""
              />
              <div className="textright">
                <ButtonSection style={{fontSize: "30px"}}>
                  Download
                  <div style={{fontSize: "20px",color:"#DD0611"}} className="spinner-border spinner-border-md ml-4" role="status">
                </div>
                </ButtonSection>
              </div>
          </MDBCol>
          
          <LineContainer className="mt-5 mb-5"/>
        </MDBRow>
        <MDBRow className="mt-4 px-5">
        <MDBCol lg="5">
                <VideoBox>
                <div className="embed-responsive embed-responsive-16by9">
                    <VideoSection>
                        <VideoLooper title="embedsPage" start={0} end={4.48} className="embed-responsive-item" src={Video3}
                        allowfullscreen></VideoLooper>
                    </VideoSection>
                </div>
                </VideoBox>
                <VideoOverlays><img className="our-story-card-img" style={{width: "400px"}} src={Image2}/></VideoOverlays>
            </MDBCol>
              
          <MDBCol lg="7">
            <JumboTitle className="font-weight-bold mb-3 p-0 pt-5">
              <strong>Watch everywhere.</strong>
            </JumboTitle>
            <MDBP >
            Stream unlimited movies and TV shows on
            </MDBP>
            <MDBP >
            your phone, tablet, laptop, and TV without
            </MDBP>
            <MDBP >
            paying more.
            </MDBP>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
      <LineContainer className="mt-5 mb-5"/>
    </MDBCard>
  );
}

export default Sections;