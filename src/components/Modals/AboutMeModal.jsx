import React from 'react'
import styled from 'styled-components'

import {IoCloseCircleOutline} from 'react-icons/io5'
import {images} from '../../constant'

const AboutMeModal = (props) => {
    const reset = (e) =>{
        props.handleClick(e);
      }
  return (
    <>
    {props.showModal === "open" && (
    <Container>
        <Content>
        <h2>About Me</h2>
        <Photo>
          <img src={images.aboutmephoto} alt="" />
        </Photo>
        <Bio>
        <p>Hi! I'm Abigael Gem and welcome to my portfolio. I'm an introvert who is always curious about the world. I used to work in the hospitality industry but decided to shift my career to web development as I'm passionate about making art and coding. Going through pandemics and a lot of self-reflection made me realize that it's my calling. Coding helped me get over my depression and keeps me motivated daily. Although it's a challenge and difficult as I get through it, it makes me feel happy inside whenever I achieve something.</p>

        <p>Aside from that, I also love writing novels and I've already monetized two of my works (out of five) into passive income while taking the roadmap to become a web developer. Before studying web development, I'd been learning about UX Design so I would have an idea about the designing process before its development stage.</p>

        <p>I want to be better than yesterday and strive to become great at my job. Being a self-taught developer taught me about discipline and the right mindset. Consistency and perseverance are the keys to furthering my learning so for me, giving up is not an option as I'm determined to reach my goals in life.</p>

        <p>Let's keep grinding!</p>

        </Bio>
        <Resources>
        <h3>My Learning Resources</h3>
            <li><p>Udemy: The Complete 2022 Web Development Course by Dr. Angela Yu</p></li>
            <li><p>FreeCodeCamp.org</p></li>
            <li><p>Clever Programming</p></li>
            <li><p>Youtube Course/Tutorials</p></li>
        </Resources>

        <Close>
        <IoCloseCircleOutline onClick={(event) => reset(event)}/>
        </Close>
        
        </Content>
       

    </Container>
       )}
    </>
  )
}

const Container = styled.div`
    position:fixed;
    width:60vw;
    height:80vh;
    margin:auto;
    top:5vh;
    left:0;
    right:0;
    z-index:999;
    color: #fff;
    border-radius:10px;
    background-color: rgba(0, 0, 0, 0.70);  
    backdrop-filter: blur(15px);
    animation: fadeInDown 0.5s;
    overflow-y:scroll;
    overflow-x: hidden;
    display:flex;
    flex-direction: column;
    align-items: center;

    @media (max-width:1024px){
      width:80vw;
      height:80vh;
    }
    
`

const Content = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin:50px;
    width:70%;
`

const Photo = styled.div`
    overflow:hidden;
    margin:20px 0;
    width:200px;
    height:200px;
    border-radius:50%;

    img{
      object-fit:contain;
      width:100%;
    }

`

const Bio = styled.div`
  p{
    text-indent:30px;
    margin-top:10px;
    line-height:1.5;
    text-align: justify;
  }
`

const Resources = styled.ul`
  align-self: flex-start;
  margin:20px 0;

  h3{
    text-transform: uppercase;
    margin: 10px 0;
    color:#CABA00;
  }
`

const Close = styled.div`
  position:fixed;
  top:10px;
  right:10px;
  svg{
    cursor:pointer;
    font-size:40px;
  }
`

export default AboutMeModal