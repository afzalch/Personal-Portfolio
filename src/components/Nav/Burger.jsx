import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const StyledBurger = styled.div`
  height: 2rem;
  position: fixed;
  margin-right: 1%;
  top: 15px;
  right: 0;
  padding-right: 1%;
  z-index: 20;
  display: none;

  @media (max-width: 1000px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    margin-right: auto;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    right: 0;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;


const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open}/>
    </>
  )
}

export default Burger
