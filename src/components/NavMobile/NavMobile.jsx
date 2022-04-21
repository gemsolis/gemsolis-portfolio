import React, {useState} from 'react'
import styled from 'styled-components'

import {AiOutlineHome, AiOutlineProject, AiOutlineContacts, AiOutlineGithub, AiFillLinkedin, AiOutlineBehanceSquare, AiFillFacebook} from 'react-icons/ai'
import {GrGraphQl}  from 'react-icons/gr'
import { RiMenuUnfoldFill, RiStackLine}  from 'react-icons/ri'

import logo from '../../assets/gem-logo.png'

const NavMobile = () => {
    const [showMenu, setShowMenu] = useState("")

    const handleToggle = () => {
        setShowMenu(!showMenu);
      };

  return (

    <NavListMobile className= {showMenu ? "showMenu" : "hideMenu"} >

    <NavLinksMobile onClick={handleToggle}>
        <LogoMobile>
        <a href="/"><img src={logo} alt="Gem Solis"/></a>
        </LogoMobile>
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
        <li><a href="https://github.com/gemsolis" target="_blank"><AiOutlineGithub/></a></li>
        <li><a href="https://www.linkedin.com/in/abigael-gem-manalo-673362155/" target="_blank"><AiFillLinkedin/></a></li>
        <li><a href="https://www.behance.net/gemsolis" target="_blank"><AiOutlineBehanceSquare/></a></li>
        <li><a href="https://www.facebook.com/abigaelgem19/" target="_blank"><AiFillFacebook/></a></li>
        </SocialLinks>
    </NavLinksMobile>

    <Menu> 
    <button onClick={handleToggle}><RiMenuUnfoldFill/></button>
    </Menu>
</NavListMobile>
  )
}

const NavListMobile = styled.div`
    display:none;

@media (max-width:820px){
    display:flex;
    position:fixed;
    z-index:100;
    top:20vh;
    transition: 0.5s all ease;
    background-color: rgba(255, 255, 255, 0.90);  
    backdrop-filter: blur(15px);
    border-bottom-right-radius: 10px;
    box-shadow: 2px 6px 13px -2px rgba(0,0,0,0.11);
    -webkit-box-shadow: 2px 6px 13px -2px rgba(0,0,0,0.11);
    -moz-box-shadow: 2px 6px 13px -2px rgba(0,0,0,0.11);

   
}

`

const LogoMobile = styled.div`
    display:flex;
    justify-content: center;

    img{
        width:50px;
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
        background-color: rgba(0, 0, 0, 0.70);  
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
    background-color: #000;
    border-bottom-right-radius: 10px;

    svg{
        font-size:22px;
        color:#F0C413;
    }
`

export default NavMobile