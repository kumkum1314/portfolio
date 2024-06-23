import {useEffect, useState} from "react";
import { Navbar , Container, Nav } from "react-bootstrap";
import Logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.png'
import navIcon2 from '../assets/img/nav-icon2.png'
import navIcon3 from '../assets/img/nav-icon3.png'
export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)
    }, [])
    const onUpdateActiveLink= (value) => {
        setActiveLink(value);
    }
    return(
        <Navbar expand ="lg" className={ scrolled ? "scrolled" : ""}>
        <Container>
        <Navbar.Brand href="#home">
           <img src={Logo} alt="Logo" /> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >

        </Navbar.Toggle >
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className ={activeLink ==='home' ? 'active navbar-link' : 'navbar-link'} onClick ={ () => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#Skills" className ={activeLink ==='skills' ? 'active navbar-link' : 'navbar-link'} onClick ={ () => onUpdateActiveLink('skilss')}>SKILLS</Nav.Link>
            <Nav.Link href="#Project" className ={activeLink ==='projects' ? 'active navbar-link' : 'navbar-link'} onClick ={ () => onUpdateActiveLink('projects')}>PROJECTS</Nav.Link>
          
          </Nav>
          <span className="navBar-text" >
          <div className="social-icon">
          <a href="https://www.linkedin.com/in/kumkum-59905822a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
          "><img src ={navIcon1} alt=""/></a>
          <a href="https://github.com/kumkum1314"><img src ={navIcon2} alt=""/></a>
          <a href="https://leetcode.com/u/kumkum143/"><img src ={navIcon3} alt=""/></a>
</div>
<button className="bg" onClick= {()=> console.log('connect')} /><span> Let's Connect</span>
</span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

    
