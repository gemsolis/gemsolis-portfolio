import React, {useState} from 'react'
import styled from 'styled-components'

import patternbgfull from '../../assets/pattern-bgfull.jpg'

import { Fade } from "react-awesome-reveal";
import VisionBoardModal from '../Modals/VisionBoardModal'
import {images} from '../../constant'
import {SiAntdesign} from 'react-icons/si'

const CaseStudy = () => {
    const [showModal, setShowModal] = useState("close");

    const handleClick = (e) => {
        e.preventDefault();
        if (e.target !== e.currentTarget) {
          return;
        }
    
        switch (showModal) {
          case "open":
            setShowModal("close");
            break;
          case "close":
            setShowModal("open");
            break;
            default:
            setShowModal("close");
            break;
        }
    }
  return (
    <Container id="casestudy">
        <HeadText>
            <h2>Case Study</h2>
        </HeadText>
        <Fade direction={"left"}>
        <BgWrap style={{
        background: `url(${patternbgfull})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundAttachment:"fixed",
      }}>
        <Overview>

<Shadow/>
<CsPhoto>
    <img src={images.casestudy2} alt="Aurras App" />
</CsPhoto>
<CsInfo>
<Title>
    <TitleText>
        <h3>Aurras App</h3>
        <button onClick={handleClick}>
            <SiAntdesign/><span onClick={handleClick}>View Vision Board</span>
        </button>
    </TitleText>
</Title>

<About>
<h5>About</h5>  
<p>Aurras is a music player application that offers instrumental streaming services and is built for artist to showcase their crafted music. It also has a feature that let the users add environmental sounds, pure waves, and happiness frequency in the background to serve therapeutic and meditative purpose to the listeners.</p>

</About>
<TechInfo>
    <Tools>
    <span>Tools</span>
    <img src={images.figma} alt="Figma" /> 
    <img src={images.adobexd} alt="AdobeXd" /> 
    </Tools>
    <Platform>
    <span>Platform</span>
    <img src={images.ios} alt="Figma" /> 
    <img src={images.android} alt="AdobeXd" /> 
    </Platform>

</TechInfo>
</CsInfo>

</Overview>
        </BgWrap>
        
        </Fade>
        <VisionBoardModal showModal={showModal} handleClick={handleClick}/>
    </Container>
    
  )
}

const Container = styled.div`
    margin: 100px 20px;

    @media (max-width:768px){
        margin: 100px 10px;
    }


`

const HeadText = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    margin-bottom:50px;

`

const Overview = styled.div`
    display:flex;
    position:relative;
    justify-content: space-around;
    align-items: center;
    background-color:#0F162B;
    color:#fff;
    padding:50px;
    border-radius:10px;
    background: linear-gradient(315deg, rgba(15,22,43,0.55) 0%, rgba(86,0,107,0.55) 100%);
    background-attachment: fixed;

    @media (max-width:768px){
        flex-direction:column;
        padding:30px;
    }

`

const BgWrap = styled.div`
    width:100%;
    height:100%;
`




const Shadow = styled.div`
        position:absolute;
        bottom:-50px;
        margin:auto;
        width:100%;
        height:100%;
        max-width:500px;
        max-height:100px;
        border-radius: 70%;
        background-color:red;
        z-index:-1;
        background-color: #000;  
        filter: blur(20px);
        opacity:30%;

`




const Title = styled.div`
    margin-bottom:30px;


    h4{
        font-size:20px;
        font-weight:200;
        text-transform:uppercase;
    }
`

const TitleText = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;

    @media (max-width:428px){
        align-items: flex-start;
       flex-direction: column;
    }
    


    h3{
        font-size:2rem;
        margin:10px 0;

        @media (max-width:768px){
        font-size:1.7rem;
        margin-top:20px;
    }
    }



    button{
        padding:10px;
        background-color:#F0C413;
        border-radius:10px;
        cursor:pointer;

        span{
            padding-left:10px;
        }

        @media (max-width:600px){
            font-size:12px;

    }
    }
`


const CsPhoto = styled.div`
    margin:10px;
    img{
        width:100%;
        max-width:500px;
    }

`

const CsInfo = styled.div`

`

const About = styled.div`
    max-width:550px;

    h5{
        font-size:1.1rem;
       margin-bottom:20px; 
    }

    p{
        margin-bottom:20px;
    }
`

const TechInfo = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-around;
    margin-top:50px;

    @media (max-width:768px){
        flex-direction:column;
        align-items: flex-start;
    }


`
const Tools = styled.div`
    display:flex;
    align-items: center;


    span{
        margin:10px;
    }

    img{
        width:20px;
        margin:0 5px;
    }
`

const Platform = styled(Tools)`

`



export default CaseStudy