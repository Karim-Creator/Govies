import React from 'react';
import styled from 'styled-components'
import VideoLooper from 'react-video-looper'
import Video3 from '../../Videos/video-3.mp4'
import Image2 from '../../images/image-4.png'
import {MDBCol} from 'mdbreact'

export const VideoBox = styled.div`
    position:relative;
`

export const VideoOverlays = styled.div`
    position:absolute;
    width:500px;
    height: 500px;
    min-height:40px;
    z-index:300000;
    top:5px;
    left:5px;
    text-align:center;
`

export const VideoSection = styled.div`
    position:absolute;
    width:400px;
    height: 300px;
    z-index:300000;
    top: 50px;
    left: 120px;
    text-align:center;
`

const ImageOver = () => {
    return (
        <>
            <MDBCol lg="5">
                <VideoBox>
                <div className="embed-responsive embed-responsive-16by9">
                    <VideoSection>
                        <VideoLooper title="embedsPage" start={0} end={4.48} className="embed-responsive-item" src={Video3}
                        allowfullscreen></VideoLooper>
                    </VideoSection>
                </div>
                </VideoBox>
                <VideoOverlays><img className="our-story-card-img" src={Image2}/></VideoOverlays>
            </MDBCol>
        </>
    )
}

export default ImageOver


