/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import styled from 'styled-components'
import {data} from '../../constant'
import {BsFileCodeFill, BsGlobe} from 'react-icons/bs'
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
          <Name>
          <h3>{project.name}</h3>
          </Name>
          <Description>
          <p>{project.description}</p>
          </Description>
          <SiteNav>
          <button><a href={project.github} target="_blank"><BsFileCodeFill/><span>View Code</span></a></button>
          <button><a href={project.site} target="_blank"><BsGlobe/> <span>See Site</span></a></button>
          </SiteNav>
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
    margin:50px;
    
`

const Title = styled.div`
    margin-top:80px;
    margin-bottom: 50px;


`

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 30px;
  grid-row-gap: 40px;

`

const ItemWrap = styled.div`
    position:relative;
    overflow:hidden;
    border-radius: 5px;
    color: #fff;
    background-color: #fff;
    cursor:pointer;
    box-shadow: 2px 6px 13px -2px rgba(0,0,0,0.20);
    -webkit-box-shadow: 2px 6px 13px -2px rgba(0,0,0,0.20);
    -moz-box-shadow: 2px 6px 13px -2px rgba(0,0,0,0.20);

`


const Name = styled.div`
  font-size:16px;
  margin:20px;
  color:#CABA00;
`

const SiteNav = styled.div`
  display:flex;
  justify-content: space-around;
  align-items: center;
  padding:10px 0;
  margin-bottom: 10px;
  background-color: #fff;

  button{
    display:flex;
    align-items: center;
    color: #000;
    font-size:14px;
    margin-left:5px;

    svg{
      color:#9B0095
    }

    span{
      font-size:14px;
      padding-left:5px;
    }
  }
`

const Description = styled.div`
   margin:20px 15px;
   height:50px;
   color:#000;
`

const ProjectImage = styled.div`
  
    
   img{
     width:100%;
     object-fit: cover;
   }

`
export default Projects