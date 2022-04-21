import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'


import {IoCloseCircleOutline} from 'react-icons/io5'
import {SiAntdesign} from 'react-icons/si'
import {images} from '../../constant'



const Overview = (props) => {
const reset = (e) =>{
  props.handleClick(e);
}

  return (
    <>
    {props.showModal === "open" && (
    <Container>
      <Header>
      <h1>Vision Board</h1>
      <NavLinks>
        <li><a href="#discover"><SiAntdesign/><span>Discover</span></a></li>
        <li><a href="#define"><SiAntdesign/><span>Define</span></a></li>
        <li><a href="#ideate"><SiAntdesign/><span>Ideate</span></a></li>
        <li><a href="#design"><SiAntdesign/><span>Design</span></a></li>
        <li><a href="#prototype"><SiAntdesign/><span>Prototype</span></a></li>
      </NavLinks>
      <Close onClick={(event) => reset(event)}>
        <IoCloseCircleOutline onClick={(event) => reset(event)}/>
      </Close>
      </Header>
      <Main>
        <img src={images.vboverview} alt="Overview" id="overview"/>
        <img src={images.vbdiscover} alt="Discover" id="discover"/>
        <img src={images.vbdefine} alt="Define" id="define"/>
        <img src={images.vbideate} alt="Ideate" id="ideate"/>
        <img src={images.vbdesign} alt="Design" id="design"/>
        <img src={images.vbdesign2} alt="Visual Design" />
        <Prototype>
        <ReactPlayer url='https://vimeo.com/535440683' id="prototype" width="100%"/>
        </Prototype>
        
      </Main>
      
    </Container>
    )}
    </>
  )
}
const Container = styled.div`
    position:fixed;
    width:85vw;
    height:85vh;
    margin:auto;
    top:50px;
    left:0;
    right:0;
    z-index:999;
    color: #000000;
    border-radius:10px;
    background-color: #f5f5f5;
    animation: fadeInDown 0.5s;
    overflow-x: hidden;
    overflow-y: scroll;
    scroll-behavior: smooth;

`

const Header = styled.div`
  position:sticky;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:20px;
  top:0;
  left:0;
  width:100%;
  margin-bottom: 10px;
  background: #f5f5f5;

  h1{
    font-size:20px;
  }

  @media(max-width:600px){
      h1{
        font-size:18px;
      }
    }

`

const Close = styled.button`
  font-size:1.5rem;
  cursor:pointer;
  padding:5px;

    svg{
      font-size: 30px;
      color: #000000;
    }

`

const NavLinks = styled.ul`
  display:flex;
  color:#000000;
  padding:0 10px;
  border: 1px solid #000;
  border-radius: 5px;

  li{
    position:relative;
    margin-right: 20px;
    padding:5px 10px;
    border-radius: 10px;

    svg{
      color:#9B0095;
      padding-right:5px;
    }   
  }

  @media(max-width:758px){
    li{
      margin-right:2px;
      padding:5px;
      svg{
        padding:2px;
      }
      span{
      display:none;
    }

    }

  }
`

const Main = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    margin:30px 0;

   img{
     width:100%;
     object-fit: contain;
   }

`

const Prototype = styled.div`
  object-fit: contain;
  width:100%;
  height: 100%;


`


export default Overview