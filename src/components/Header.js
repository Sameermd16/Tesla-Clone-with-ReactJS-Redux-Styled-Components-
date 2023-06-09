import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close'


function Header() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Container>
      
      <a href='#'>
        <img src='/images-2/logo.svg'/>
      </a>
      
      <Menu>
        <p><a href='#'>Model S</a></p>
        <p><a href='#'>Model 3</a></p>
        <p><a href='#'>Model X</a></p>
        <p><a href='#'>Solar Roof</a></p>
        <p><a href='#'>Solar Panels</a></p>
        <p><a href='#'>Powerwall</a></p>
        <p><a href='#'>Shop</a></p>
        <p><a href='#'>Account</a></p>
      </Menu>
        <p><a href='#' id='menuBtn'>Menu</a></p>

      <Section id='mobileMenu'>
        <IconClose id='closeBtn'></IconClose>
        <p><a href='#'>Existing Inventory</a></p>
        <p><a href='#'>Used Inventory</a></p>
        <p><a href='#'>Trade-in</a></p>
        <p><a href='#'>Demo Drive</a></p>
        <p><a href='#'>Insurance</a></p>
        <p><a href='#'>Cybertruck</a></p>
        <p><a href='#'>Roadster</a></p>
        <p><a href='#'>Semi</a></p>
        <p><a href='#'>Charging</a></p>
        <p><a href='#'>Commercial Energy</a></p>
        <p><a href='#'>Utilities</a></p>
        <p><a href='#'>Find Us</a></p>
        <p><a href='#'>Support</a></p>
        <p><a href='#'>Investor Relations</a></p>
        <p><a href='#'>do this later</a></p>
      </Section>
    </Container>
  )
}

export default Header


const Container = styled.div`
  // border: 1px solid black;
  position: fixed;
  min-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px 0px 60px;
  width: 100%;
  z-index: 1;
`;


const Menu = styled.div`
  display: flex;
  align-items: center;
  p {
    font-weight: 500;
    margin-left: 10px;
    padding: 5px 15px;
    border-radius: 5px;
    font-size: 15px;
    cursor: pointer;
  }
  p: hover {
    background: lightgrey;
    transition: 0.3s ease-in-out;
    transform-origin: left;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Section = styled.div`     //mobileMenu
  position: fixed;
  right: -300px;
  top: 0;
  bottom: 0;
  height: 100vh;
  width: 300px;
  background-color: #f2f2f2;
  padding: 30px;
  display: none;
  z-index: 10;
  transition: all 0.2s ease-in;
  // transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'}
  p {
    margin-bottom: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 15px;
  }
  p:hover {
    background: lightgrey;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 80vw;
    z-index: 99;
    
    
  }
`;


const IconClose = styled(CloseIcon)`
  width: 100%;
  margin-left: 220px;
  margin-bottom: 40px;
  cursor: pointer;
  // padding: 2px;
  &: hover {
    background: lightgrey;
  }
`;


const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');

menuBtn.addEventListener('click', () => {
  mobileMenu.style.right = 0
})
closeBtn.addEventListener('click', () => {
  mobileMenu.style.right = '-300px'
})


// menuBtn.addEventListener('click', () => {
//   mobileMenu.style.display = 'block';
// })

// closeBtn.addEventListener('click', () => {
//   mobileMenu.style.display = 'none';
// })