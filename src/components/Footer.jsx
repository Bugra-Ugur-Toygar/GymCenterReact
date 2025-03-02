import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterSection>
      <FooterTop>
        <FooterLogo>
          <img src="/images/logo.png" alt="Logo" />
        </FooterLogo>
      </FooterTop>
      <FooterBottom>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quod, quae, voluptas quia quibusdam voluptatibus quos
          doloribus quidem fugiat.
        </Description>
        <LinksColumn>
          <h3>Information</h3>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/classes">Classes</Link>
            </li>
            <li>
              <Link to="#">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </LinksColumn>
        <LinksColumn>
          <h3>Helpful Links</h3>
          <ul>
            <li>
              <Link to="#">Services</Link>
            </li>
            <li>
              <Link to="#">Supports</Link>
            </li>
            <li>
              <Link to="#">Terms & Condition</Link>
            </li>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
          </ul>
        </LinksColumn>
      </FooterBottom>
    </FooterSection>
  );
};

export default Footer;

// Styled Components
const FooterSection = styled.footer`
  background: #003366;
  color: white;
  padding: 40px 20px;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #002244;
  padding-bottom: 20px;
`;

const FooterLogo = styled.div`
  img {
    width: 150px;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-top: 20px;
`;

const Description = styled.div`
  flex: 1;
  min-width: 200px;
`;

const LinksColumn = styled.div`
  min-width: 200px;
  h3 {
    margin-bottom: 10px;
  }
  ul {
    li {
      margin-bottom: 5px;
      a {
        color: white;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
