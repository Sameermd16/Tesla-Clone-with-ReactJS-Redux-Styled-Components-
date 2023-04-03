import React from 'react'
import styled from 'styled-components'

function Header() {
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
        <p><a href='#'>Menu</a></p>
      </Menu>
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
  }
  p: hover {
    background: lightgrey;
    transition: 0.3s ease-in-out;
    transform-origin: left;
  }
`;

