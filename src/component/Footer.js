import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaUser, FaGraduationCap, FaChalkboardTeacher, FaLinkedin, FaYoutube, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const slideInFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FooterContainer = styled.footer`
  background-color: #a35de4;
  color: #fff;
  padding: 40px 0;
  position: relative;
`;

const FooterSection = styled.div`
  flex: 1;
  margin-right: 20px;
  animation: ${slideInFromBottom} 0.5s ease-in-out forwards;
`;

const FooterHeading = styled.h2`
  font-size: 1.5em;
  border-bottom: 1px solid #fff;
  padding-bottom: 10px;
  text-align: center;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterListItem = styled.li`
  margin: 10px 0;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ffc107;
  }
`;

const FooterInfo = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const SocialMediaIcons = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;

  & > * {
    margin-left: 15px;
    font-size: 1.5em;
    color: #fff;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #ffc107;
    }
  }
`;

const ContactDetails = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-weight: bold;
  color: #fff;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <FooterSection>
          <FooterHeading>
            <FaUser /> Admin
          </FooterHeading>
          <FooterList>
            <FooterListItem><FooterLink href="/Admin">Login</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/Admin">Faculty Details</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/Admin">Student Details</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/Admin">Syllabus Management</FooterLink></FooterListItem>
          </FooterList>
        </FooterSection>

        <FooterSection>
          <FooterHeading>
            <FaGraduationCap /> Student
          </FooterHeading>
          <FooterList>
            <FooterListItem><FooterLink href="/Student">Login</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/Student">Personal Info</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/Student">Check Results</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/Student">View/Download Syllabus</FooterLink></FooterListItem>
          </FooterList>
        </FooterSection>

        <FooterSection>
          <FooterHeading>
            <FaChalkboardTeacher /> Faculty
          </FooterHeading>
          <FooterList>
            <FooterListItem><FooterLink href="/Faculty">Login</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/Faculty">Personal Info</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/Faculty">Manage Results</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/Faculty">Manage Syllabus</FooterLink></FooterListItem>
          </FooterList>
        </FooterSection>
      </div>

      <FooterInfo>
        <h3>SNT COLLEGE OF ENGINEERING</h3>
        <p>DEPARTMENT OF INFORMATION TECHNOLOGY</p>
        <p>PERUNDURAI, ERODE - 638053</p>
      </FooterInfo>

      <SocialMediaIcons>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
      </SocialMediaIcons>

      <ContactDetails>
        <p>Phone: +1 234 567 890</p>
        <p>Email: info@example.com</p>
      </ContactDetails>
    </FooterContainer>
  );
};

export default Footer;
