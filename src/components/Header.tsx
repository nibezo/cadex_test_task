import React from "react";
import styled from "styled-components";

// Create a styled wrapper for the header
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between; // Space out elements
  align-items: center; // Center items vertically
  padding: 10px 20px; // Add padding
  background-color: #282c34; // Dark background
  color: white; // Text color
`;

// Create a styled button
const ContactButton = styled.button`
  background-color: #61dafb; // Light blue background
  color: white; // Text color
  border: none; // Remove border
  padding: 10px 15px; // Add padding
  border-radius: 5px; // Round corners
  cursor: pointer; // Pointer cursor on hover
  transition: background-color 0.3s; // Smooth transition for hover effect

  &:hover {
    background-color: #21a1f1; // Darker blue on hover
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <span>Some Company</span>
      <ContactButton>Contact us</ContactButton>
    </HeaderWrapper>
  );
};

export default Header;
