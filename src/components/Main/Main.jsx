/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'


import { Fade } from "react-awesome-reveal";
import {AiOutlineGithub, AiFillLinkedin, AiOutlineBehanceSquare, AiFillFacebook} from 'react-icons/ai'
import {CgChevronDoubleDown} from 'react-icons/cg'



import mainPhoto from '../../assets/main-photo.jpg'
import patternBg from '../../assets/pattern-bg.png'


const Main = () => {
  return (
  
    <Container id="home" style={{
        background: `url(${patternBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        }}>
        <Fade direction={"down"}>
        <Hero>
        <MainPhoto style={{
        background: `url(${mainPhoto})`,
        backgroundSize: "110%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0% 20%",
        }}/>
             
        <Intro>
            <Fade direction={"up"} delay={300}>
           <h3>Hi... Good Day!</h3>
           </Fade>
           <Fade direction={"left"} delay={500}>
            <h1>I am Gem!</h1>
            </Fade>
            <Fade direction={"up"} delay={1000}>
            <p>a self-taught Front-End Developer based in the Philippines.</p>
            </Fade>
            <SocialLinks>
            <Fade direction={"down"} delay={1200} cascade={true}>
            <li><a href="https://github.com/gemsolis"><AiOutlineGithub/></a></li>
            <li><a href="https://www.linkedin.com/in/abigael-gem-manalo-673362155/"><AiFillLinkedin/></a></li>
            <li><a href="https://www.behance.net/gemsolis"><AiOutlineBehanceSquare/></a></li>
            <li><a href="https://www.facebook.com/abigaelgem19/"><AiFillFacebook/></a></li>
            </Fade>
            </SocialLinks>
        </Intro>
        </Hero>
        </Fade>
        <Fade direction={"up"} delay={1000} cascade={true}>
        <WorkButton>
        <a href="#projects">
            <button>
            <CgChevronDoubleDown/>
            <span>See my works</span>
            </button>
            </a>
        </WorkButton>
        </Fade>


        
    </Container> 

  )
}

const Container = styled.div`
    width:100%;
    height:100vh;
    padding: 5vh 5vw;
    

`
const Hero = styled.div`
    display:flex;
    justify-content: space-around;


    @media (max-width:1024px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    


`

const MainPhoto = styled.div`
    width:100%;
    height:420px;
    width:420px;
    border-radius: 50%;



    @media (max-width:768px){
        height:150px;
        width:150px;
    }
    @media (max-width:1024px){
        height:300px;
        width:300px;
    }

`

const Intro = styled.div`
    display:flex;
    align-items: flex-start;
    flex-direction: column;
    align-self: flex-end;
    

    h3{
        font-size:2.5rem;
        color:#caba00;

    }
    h1{
        padding:0 10px;
        font-size:4.5rem;
        background: #9B0095;
        background: -webkit-linear-gradient(to right, #B31EAE 0%, #FF00FF 31%, #F0C413 100%);
        background: -moz-linear-gradient(to right, #B31EAE 0%, #FF00FF 31%, #F0C413 100%);
        background: linear-gradient(to right, #B31EAE 0%, #FF00FF 31%, #F0C413 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    p{
            font-size:20px;
            font-weight:300;
            color:#3e3e3e;
            padding:5px 0;
        }

    @media (max-width:1024px){
        text-align: center;
        align-items: center;
        align-self: center;
        padding:60px 0;

        h3{
            font-size:2rem;
        }

        h1{
            font-size:4rem;
        }

    }

    @media (max-width:568px){
        padding:60px 10px;
        text-align: center;
        align-items: center;
        padding:20px;

        h3{
            font-size:1.5rem;
        }

        h1{
            font-size:2.5rem;
        }

    }

    
`

const SocialLinks = styled.ul`
    display:flex;
    align-self: flex-end;
    margin:30px 0;

    svg{
        color:#2b2b2b;
        font-size: 1.5rem;
        cursor: pointer;
        transition: 0.2s all ease;
        margin:0 10px;

        :hover{
            transform: scale(1.5);
            color:#9B0095;
    }

    }

    @media (max-width:1280px){
        align-self: center;
    }
`

const WorkButton = styled.div`
    display:flex;
    justify-content: center;


    @media (min-width:1441px){
        margin-top: 200px;
    }

    @media (max-width:320px){
        display:none;
    }


    button{
        display:flex;
        flex-direction: column;
        align-items: center;
        text-transform: uppercase;
        cursor: pointer;
   

        span{
            text-decoration: underline;
        }

        svg{
            color:#9B0095;
            border:2px solid #9B0095;
            border-radius: 40px;
            width:30px;
            height:50px;
            padding:10px 5px;
            margin-bottom: 10px;
            -moz-animation: bounce 2s infinite;
            -webkit-animation: bounce 2s infinite;
            animation: bounce 2s infinite;
        }
    }

`

export default Main