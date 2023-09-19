import { Container } from '@mantine/core';
import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';



const Navbar = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if(route === location.pathname){
        return true;
    }
  }

  return (
    <nav>
        <Container size={"xl"}>
            <div className='navbar-wrapper'>
                <div className='logo' onClick={() => navigate("/")}>
                    Logo
                </div>
                <ul>
                    <li style={{
                        color:pathMatchRoute("/") ? "green" : "#000000"
                    }} onClick={() => navigate("/")}>Explore</li>
                    <li style={{
                        color:pathMatchRoute("/offers") ? "green" : "#000000"
                    }} onClick={() => navigate("/offers")}>Offer</li>
                    <li style={{
                        color:pathMatchRoute("/profile") ? "green" : "#000000"
                    }} onClick={() => navigate("/profile")}>Profile</li>
                </ul>
            </div>
        </Container>
    </nav>
  )
}

export default Navbar