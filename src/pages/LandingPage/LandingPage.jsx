// LandingPage.jsx

import React from 'react';
import styled from 'styled-components';
import { useGlobalState } from '../../context/globalProvider';
import { useClerk } from '@clerk/clerk-react';


const LandingPage = () => {

    const clerk = useClerk();

    const handleSignIn = () => {
        clerk.openSignIn({})
    };

    const handleSignUp = () => {
        clerk.openSignUp({})
    };

 


  return (
    <LandingPageStyled>
      <Header>
        <Logo>Focus Hub</Logo>
        <ButtonContainer>
          <SignInButton onClick={handleSignIn}>Sign In</SignInButton>
          <SignUpButton onClick={handleSignUp}>Sign Up</SignUpButton>
        </ButtonContainer>
      </Header>
      {/* Add your landing page content here */}
    </LandingPageStyled>
  );
};

const LandingPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-bottom: 20px;
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #333; /* Adjust the color as needed */
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const SignInButton = styled.button`
  padding: 10px;
  background-color: #4caf50; /* Green color, you can change it */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
`;

const SignUpButton = styled.button`
  padding: 10px;
  background-color: #2196f3; 
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
`;

export default LandingPage;
