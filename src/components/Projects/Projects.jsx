/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import styled from 'styled-components'



import {data} from '../../constant'
import {BsFileCodeFill, BsGlobe, BsFillNutFill} from 'react-icons/bs'
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  return (
    <Container id="projects">
    <Title>
      <h2>Projects</h2>
    </Title>
    <Items>
    {data.projects.map((project, index) => (
        <Fade direction={"right"}>
      <ItemWrap>
          <ProjectImage>
          <img src={project.imgUrl} alt="" />
          </ProjectImage>
          <Details>
          <Name>
          <BsFillNutFill/><h3>{project.name}</h3>
          </Name>
          <Description>
          <p>{project.description}</p>
          </Description>
          <SiteNav>
          <button><a href={project.site} target="_blank"><BsGlobe/> <span>Live Site</span></a></button>
          <button><a href={project.github} target="_blank"><BsFileCodeFill/><span>View Code</span></a></button>
          </SiteNav>
          </Details>

          </ItemWrap>
        </Fade>
         
        ))}
   </Items>
    </Container>

  )
}

const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin:50px 10vw;

    @media (min-width:2000px){
      margin:50px 20vw;
    }
    
    @media (max-width:768px){
      margin:50px 20px;

    }
    
`

const Title = styled.div`
    margin-top:80px;
    margin-bottom: 50px;


`

const Items = styled.div`
  width:100%;


`

const ItemWrap = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin:20px 0;

  @media (max-width:667px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

`

const Details = styled.div`
  margin:20px;

  @media (max-width:667px){
    margin:20px 0;
  }
`


const Name = styled.div`
    display:flex;
    align-items: center;
    margin-bottom:20px;
    color:#000;
    text-transform: uppercase;
    font-weight:400;

    h3{
      padding-left:10px;
      color:#9B0095;
    }
`

const SiteNav = styled.div`
    display:flex;
    margin:20px;

    button{
      background-color: #F0C413;
      margin-right: 20px;
      padding:10px;
    }

    span{
      font-weight: 700;
      margin-left:10px;
    }

    @media (max-width:568px){
      margin:10px;
    }
    
`

const Description = styled.div`
    padding-left:20px;
    margin-bottom:20px;
`

const ProjectImage = styled.div`
    img{
    max-width:300px;
    transition: 0.3s all ease;

    :hover{
      transform: scale(1.1);
    }
    }

`
export default Projects