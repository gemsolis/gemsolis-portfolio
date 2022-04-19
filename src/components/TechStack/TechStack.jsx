import React from 'react'
import styled from 'styled-components'


import { Slide } from "react-awesome-reveal";
import {images} from '../../constant'

const TechStack = () => {
  return (
    <Container id="techstack">
        <h2>Tech Stack</h2>
        <Tech>
        <Slide direction={"right"} >
        <Language>
            <li><img src={images.html} alt="html"/></li>
            <li><img src={images.css} alt="css"/></li>
            <li><img src={images.javascript} alt="javascript"/></li>
        </Language>
        <Library>
            <li><img src={images.react} alt="react"/></li>
            <li><img src={images.sass} alt="sass"/></li>
            <li><img src={images.bootstrap} alt="bootstrap"/></li>
        </Library>
        <Design>
            <li><img src={images.photoshop} alt="react"/></li>
            <li><img src={images.adobexdlogo} alt="sass"/></li>
            <li><img src={images.figmalogo} alt="bootstrap"/></li>
        </Design>
        <Tools>
            <li><img src={images.github} alt="react"/></li>
            <li><img src={images.git} alt="sass"/></li>
            <li><img src={images.firebase} alt="bootstrap"/></li>
        </Tools>
        </Slide>
        </Tech>

    </Container>
  )
}

const Container = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    margin:200px 0;

    h2{
        margin-bottom:60px;
    }

`
const Tech = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 20px;

    @media (max-width:667px){
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    }


    img{
        width:50px;
        transition:0.3s all ease;

        :hover{
            transform: translateY(-10px);
        }
    }
`

const Language = styled.ul`
    display:flex;
    

    li{
        padding:20px;
    }
`
const Library = styled(Language)``
const Design = styled(Language)``
const Tools = styled(Language)``

export default TechStack