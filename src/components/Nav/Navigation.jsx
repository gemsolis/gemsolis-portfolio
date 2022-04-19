/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import styled from 'styled-components'

import ScrollspyNav from 'react-scrollspy-nav'
import AboutMeModal from '../Modals/AboutMeModal'
import logo from '../../assets/gs-logo.png'
import {AiOutlineHome, AiOutlineProject, AiOutlineContacts, AiOutlineGithub, AiFillLinkedin, AiOutlineBehanceSquare, AiFillFacebook} from 'react-icons/ai'
import {GrGraphQl}  from 'react-icons/gr'
import {RiQuestionLine, RiMenuUnfoldFill, RiStackLine, RiArrowUpSLine}  from 'react-icons/ri'

const Navigation = () => {
    const [showMenu, setShowMenu] = useState("")
    const [showModal, setShowModal] = useState("close");


    const handleToggle = () => {
        setShowMenu(!showMenu);
      };


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
    <>
    <Container id="homepage">

    <Logo>
    <a href="#homepage"><img src={logo} alt="Gem Solis"/></a>
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

        <NavListMobile className= {showMenu ? "showMenu" : "hideMenu"} >
        <NavLinksMobile onClick={handleToggle}>
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
            <SocialLinks>
            <li><a href="https://github.com/gemsolis"><AiOutlineGithub/></a></li>
            <li><a href="https://www.linkedin.com/in/abigael-gem-manalo-673362155/"><AiFillLinkedin/></a></li>
            <li><a href="https://www.behance.net/gemsolis"><AiOutlineBehanceSquare/></a></li>
            <li><a href="https://www.facebook.com/abigaelgem19/"><AiFillFacebook/></a></li>
            </SocialLinks>
        </NavLinksMobile>

        <Menu> 
        <button onClick={handleToggle}><RiMenuUnfoldFill/></button>
        </Menu>
    </NavListMobile>

    <BacktoTop>
       <a href="#home"><button><RiArrowUpSLine/></button></a>
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
    overflow: hidden;
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
        font-size:16px;
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


const NavListMobile = styled.div`
    display:none;

@media (max-width:820px){
    display:flex;
    position:fixed;
    z-index:100;
    top:20vh;
    transition: 0.5s all ease;
    background-color: rgba(255, 255, 255, 0.55);  
    backdrop-filter: blur(15px);
    border-bottom-right-radius: 10px;
    box-shadow: 2px 6px 13px -2px rgba(0,0,0,0.11);
    -webkit-box-shadow: 2px 6px 13px -2px rgba(0,0,0,0.11);
    -moz-box-shadow: 2px 6px 13px -2px rgba(0,0,0,0.11);

   
}

`
const NavLinksMobile = styled.ul`
    display:none;


    @media (max-width:820px){
    display:flex;
    flex-direction:column;
    padding-top:20px;
    

    

    li{
        color:#fff;
        padding:10px 10px;
        cursor:pointer;
    }

    span{
        padding-left:10px;
    }



}

`

const Menu = styled.div`
    display:none;

    @media (max-width:820px){
        display:flex;
        button{
        position:fixed;
        color: #fff;
        font-size:18px;
        background-color: rgba(0, 0, 0, 0.80);  
        backdrop-filter: blur(15px);
        padding:10px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        cursor:pointer;


    }
}


`

const SocialLinks = styled.ul`
    display:flex;
    justify-content: space-around;
    margin-top: 10px;
    background:#fff;
    border-bottom-right-radius: 10px;

    li{
        font-size:22px;
        color:#9B0095;
    }
`

const BacktoTop = styled.div`
    position:fixed;
    bottom:20px;
    right:20px;

    button{
        padding:5px 10px;
        background-color: rgb(155, 0, 149, 0.44);;
        font-size:2rem;
        color:#fff;
        border-radius: 50%;
        cursor: pointer;
    }
`

export default Navigation