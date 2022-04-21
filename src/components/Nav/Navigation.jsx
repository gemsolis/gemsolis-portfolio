/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import ScrollspyNav from 'react-scrollspy-nav'
import AboutMeModal from '../Modals/AboutMeModal'
import logo from '../../assets/gem-logo.png'
import {AiOutlineHome, AiOutlineProject, AiOutlineContacts, AiOutlineGithub, AiFillLinkedin, AiOutlineBehanceSquare, AiFillFacebook} from 'react-icons/ai'
import {GrGraphQl}  from 'react-icons/gr'
import {RiQuestionLine, RiMenuUnfoldFill, RiStackLine, RiArrowUpSLine}  from 'react-icons/ri'

const Navigation = () => {
   
    const [showModal, setShowModal] = useState("close");
    const [showTopBtn, setShowTopBtn] = useState(false);




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

      useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };


  return (
    <>
    <Container >

    <Logo>
    <a href="/"><img src={logo} alt="Gem Solis"/> <h1>gem solis</h1></a>
    </Logo>
    <NavList>
         <ScrollspyNav
          scrollTargetIds={["home", "projects", "casestudy", "techstack", "contacts"]}
          activeNavClass="current"
          scrollDuration={100}
        >
        <NavLinks>
            
            <li>
                <a href="#home"><AiOutlineHome/><span>Home</span></a>
            </li>
            <li>
                <a href="#projects"><AiOutlineProject/><span>Projects</span></a>
            </li>
            <li>
                <a href="#casestudy"><GrGraphQl/><span>Case Study</span></a>
            </li>
            <li>
                <a href="#techstack"><RiStackLine/><span>Tech Stack</span></a>
            </li>
            <li>
                <a href="#contacts"><AiOutlineContacts/><span>Contacts</span></a>
            </li>
        </NavLinks>
        </ScrollspyNav>
    </NavList>
    <SubNav>

    <RiQuestionLine onClick={handleClick}/><span onClick={handleClick}>About Me</span>

    </SubNav>


{/* Nav For Mobile */}

     

    <BacktoTop>

    {showTopBtn && (
       <a href="#home" onClick={goToTop}><button><RiArrowUpSLine/></button></a>
    )}
       </BacktoTop>
    
    <AboutMeModal showModal={showModal} handleClick={handleClick}/>
    </Container>
    
    </>
  )
}


const Container = styled.div`
    padding:10px 20px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    position:sticky;
    width:100%;
    z-index:101;
    top:0;
    left:0;
    background-color: rgb(255, 255, 255, 0.88);
    box-shadow: 2px 6px 13px -2px rgba(0,0,0,0.11);
    -webkit-box-shadow: 2px 6px 13px -2px rgba(0,0,0,0.11);
    -moz-box-shadow: 2px 6px 13px -2px rgba(0,0,0,0.11);


`

const Logo = styled.div`

    flex-grow: 1;

    a{
        display: flex;
        align-items: center;
    }

    h1{
        font-size:25px;
    }

    img{
        width:50px;
        margin-right: 5px;
    }

    @media (max-width:1024px) {
        img{
            width:45px;
        }
    }

`

const NavList = styled.div`
    display:flex;
    align-items:center;
    border-right:2px solid #000;


    @media (max-width:820px){
        display:none;
          
    }

`


const NavLinks = styled.ul`
    display:flex;
    align-items: center;
    flex-direction:row;
    cursor:pointer;


    li{
        position:relative;
        margin:10px 15px;
        border-radius: 20px;


        span{
            padding-left:8px;
            
            :hover{
            color:#9B0095;
        }

        }
    }




`

const SubNav = styled.ul`
    display:flex;
    align-items: center;
    margin-left:20px;
    cursor:pointer;


    span{
        padding-left:2px;
    
    }

    @media (max-width:1024px){
        span{
            font-size:12px;
        }
    }

`




const BacktoTop = styled.div`
    position:fixed;
    bottom:20px;
    right:20px;


    button{
        padding:5px 10px;
        background-color:#2d2d2d;;
        font-size:2rem;
        color:#fff;
        border-radius: 20%;
        cursor: pointer;
    }
`



export default Navigation