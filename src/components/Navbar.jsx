import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <Logo src="/images/logo.png" alt="Sport Center" />
      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/classes">Classes</StyledLink>
        <StyledLink to="/trainers">Trainers</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
        <JoinButton>JOIN US</JoinButton>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;

// Styled Components
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #222;
  color: white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.img`
  width: 120px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  color: white;
  font-size: 18px;
  &:hover {
    color: #ffcc00;
  }
`;

const JoinButton = styled.button`
  background: #ffcc00;
  padding: 10px 20px;
  font-size: 16px;
  &:hover {
    background: #e6b800;
  }
`;
