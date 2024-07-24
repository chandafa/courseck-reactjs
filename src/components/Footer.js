import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <div className="footer-content flex flex-between">
          <div className="footer-brand">
            <Link to="/" className="brand navbar-brand text-uppercase ls-1 fw-8">
              <span>Course</span>ck
            </Link>
          </div>
          <div className="footer-links">
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
          <div className="social-links flex">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  margin-top: 100px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .footer-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-brand {
    .brand {
      font-size: 20px;
      color: #fff;
      text-decoration: none;

      span {
        color: var(--clr-orange);
      }
    }
  }

  .footer-links {
    display: flex;
    gap: 20px;

    a {
      color: #fff;
      font-size: 15px;
      font-weight: 500;
      text-decoration: none;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: var(--clr-orange);
      }
    }
  }

  .navbar-brand{   
    span{
      color: var(--clr-orange);
    }
  }

  .social-links {
    display: flex;
    gap: 15px;

    a {
      color: #fff;
      font-size: 18px;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: var(--clr-orange);
      }
    }
  }
`;

export default Footer;
