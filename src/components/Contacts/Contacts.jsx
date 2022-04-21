/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useRef} from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser';


import {AiOutlineGithub, AiFillLinkedin, AiOutlineBehanceSquare, AiFillFacebook} from 'react-icons/ai'
import {MdLocationOn, MdOutlineLocalPhone, MdOutlineAlternateEmail} from 'react-icons/md'
import logo from '../../assets/gem-logo.png'
import patternbgfull from '../../assets/pattern-bgfull.jpg'

const Contacts = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mee5qwe', 'template_bhx27un', form.current, '7HMD-QxitDVlG97aa')
      .then((result) => {
          alert('Message Sent!');
      }, (error) => {
          alert('Failed to send!');
      });
  };

  return (

    <Container id="contacts" style={{
      background: `url(${patternbgfull})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top center",
      backgroundAttachment:"fixed",
      }}>
        <Contact>
            <Form>
              <h2>Hire me</h2>
              <form ref={form} onSubmit={sendEmail}>
                  <label>Name</label>
                  <input type="text" name="user_name" required/>
                  <label>Email</label>
                  <input type="email" name="user_email" required/>
                  <label>Message</label>
                  <textarea name="message" required/>
                  <button type="submit" value="Send">Send</button>
              </form>
            </Form>
            <SocialLinks>
            <li><a href="https://github.com/gemsolis" target="_blank"><AiOutlineGithub/></a></li>
            <li><a href="https://www.linkedin.com/in/abigael-gem-manalo-673362155/" target="_blank"><AiFillLinkedin/></a></li>
            <li><a href="https://www.behance.net/gemsolis" target="_blank"><AiOutlineBehanceSquare/></a></li>
            <li><a href="https://www.facebook.com/abigaelgem19/" target="_blank"><AiFillFacebook/></a></li>
            </SocialLinks>
        </Contact>
        <Footer>
          <FooterLogo>
            <img src={logo} alt="Gem Solis" />
          </FooterLogo>
          <ContactInfo>
            <li><MdOutlineLocalPhone/><p>+639 919 931 4510</p></li>
            <li><MdLocationOn/><p>Cavite, Philippines 4106</p></li>
            <li><MdOutlineAlternateEmail/><p>contact@gemsolis.com</p></li>
          </ContactInfo>
          <SiteInfo>
            <p>All Rights Reserved.</p>
            <h4>Coded by Gem Solis.</h4>
          </SiteInfo>

        </Footer>
    </Container>

  )
}

const Container = styled.div`
  margin:20px 50px;
  padding-top:100px;
  border:2px solid rgb(155, 0, 149, 0.44);
  border-radius: 5px;

  @media (max-width:768px){
    margin:20px 15px;
  }


`
const Contact = styled.div`
  display:flex;
  flex-direction: column;
  padding:0 20px;
`

const Form = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;


  h2{
    color:#D2CB00;
    text-align:center;
    text-transform: uppercase;
    margin-bottom: 50px;

  }


  form{
    display:flex;
    flex-direction: column;
    justify-content: center;
    width:100%;
    max-width:500px;

    label{
      margin:5px;
    }

    input{
      background: rgba(255, 255, 255, 0.44);
      outline:none;
      border:none;
      border-bottom:2px solid #252525;
      border-radius: 10px;
      padding:10px 10px;
      margin-bottom:30px;
      font-size:16px;
      color: #252525;
  

      ::placeholder{
        color:#4c4c4c;
      }

    }

    textarea{
      background: rgba(255, 255, 255, 0.44);
      height:150px;
      outline:none;
      border:none;
      border-bottom:2px solid #252525;
      border-radius: 10px;
      padding:10px 5px;
      margin-bottom:30px;
      font-size:16px;
      color: #252525;
      resize:none;
      font-family: "Source Sans Pro", sans-serif;

      ::placeholder{
        color:#252525;
        font-size:20px;
      }

    }

    button{
        align-self: center;
        width:30%;
        background-color: #9B0095;
        color:#fff;
        border-radius: 10px;
        padding:10px 0;
        font-size:16px;
        text-transform: uppercase;
        cursor:pointer;
       

      }
  }
`

const SocialLinks = styled.ul`
  display:flex;
  justify-content: center;
  margin-top:30px;

  svg{
    cursor: pointer;
    margin:0 30px;
    transition:0.3s all ease;

    :hover{
      color:#9B0095;
      transform:scale(1.5)
    }

    @media (max-width:768px){
      margin:0 10px;
  }
  }

  svg{
    font-size: 2rem;


  }
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: rgba(0,0,0,0.55);
  color:#fff;
  margin-top: 50px;
  padding:20px;


  @media (max-width:1024px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
const FooterLogo = styled.div`

  img{
    width:64px;
  }
`
const ContactInfo = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  li{
    display: flex;
    align-items: center;
    margin:0 20px;

    p{
      font-size:1.1rem;
      margin-left:10px;
    }
  }

  @media (max-width:768px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 20px;
  }


`
const SiteInfo = styled.div`
    text-align: center;
    margin:20px 0;
`




export default Contacts