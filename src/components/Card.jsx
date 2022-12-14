import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
width: 300px;
margin-bottom: 45px;
cursor: pointer;
`
const Image = styled.img`
width: 100%;
height: 202px;
background-color:#999;
`
const Details = styled.div`
    display: flex;
    margin-top: 16px;
    gap: 12px;
`
const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
`
const Texts = styled.div`
   
`
const Title = styled.h1`
font-size: 16px;
font-weight: 500;
color: ${({ theme }) => theme.text};
`
const ChannelName = styled.h2`
font-size: 14px;
color: ${({ theme }) => theme.textSoft};
margin: 9px 0px;
`
const Info = styled.div`
font-size: 14px;
color:${({ theme }) => theme.textSoft};
`

const Card = () => {
    return (
        <Link to="/video/test" style={{ textDecoration: 'none' }}>
            <Container>
                <Image src='https://i.ytimg.com/vi/yIaXoop8gl4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4cpXYbyutVNRrzTNPGaqDGjpY4w' />
                <Details>
                    <ChannelImage src='https://yt3.ggpht.com/ytc/AMLnZu9U1YR60O4hjCfJHtYSjlpRNJx07bOADEDb6X-d=s68-c-k-c0x00ffffff-no-rj' />
                    <Texts>
                        <Title>Test Video</Title>
                        <ChannelName>Nha Khoa</ChannelName>
                        <Info>10 views * today</Info>
                    </Texts>
                </Details>
            </Container>
        </Link>
    )
}

export default Card