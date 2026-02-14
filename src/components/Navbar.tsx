import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, IconButton, Divider   } from '@mui/material';
import { useTheme } from '../context/ThemeContext';
import {  Menu, Close, AsleepFilled, LightFilled } from '@carbon/icons-react';

export const Navbar: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleDownloadCV = () => {
    //
  }
  

  return (
  <NavContainer>
    <NavInner>
      <Logo>&lt;RV /&gt;</Logo>

      <NavDirectLinks>
        <Button variant="text" href="#about">About</Button>
        <Button variant="text" href="#work">Work</Button>
        <Button variant="text" href="#contact">Contact</Button>

        <Divider orientation="vertical" flexItem />

        <IconButton onClick={toggleTheme} aria-label="Toggle theme" size="medium">
          {theme.name === 'dark' ? <LightFilled /> : <AsleepFilled />}
        </IconButton>

        <Button variant="contained" size="medium" onClick={handleDownloadCV}>
          Download CV
        </Button>
      </NavDirectLinks>

      <MobileMenuToggle>
        <IconButton onClick={toggleTheme} aria-label="Toggle theme" size="medium">
          {theme.name === 'dark' ? <LightFilled /> : <AsleepFilled />}
        </IconButton>

        <IconButton onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <Close size={24} /> : <Menu size={24} />}
        </IconButton>
      </MobileMenuToggle>
    </NavInner>

    <MobileMenuOverlay isOpen={isMenuOpen}>
      <MobileNavLinks>
        <Button variant="text" href="#about" onClick={closeMenu}>About</Button>
        <Button variant="text" href="#work" onClick={closeMenu}>Work</Button>
        <Button variant="text" href="#contact" onClick={closeMenu}>Contact</Button>

        <Button variant="contained" size="medium" onClick={handleDownloadCV}>
          Download CV
        </Button>
      </MobileNavLinks>
    </MobileMenuOverlay>
  </NavContainer>
);
}

const NavContainer = styled.nav`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(4)};
  position: sticky;
  top: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.appBar};
`;

const NavInner = styled.div`
  max-width: 75rem; 
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndex.appBar}; 

  span {
    color: ${({ theme }) => theme.colors.neon.cyan};
  }
`;

const NavDirectLinks = styled.div`
  display: none;
  gap: ${({ theme }) => theme.spacing(2)};
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`;

const MobileMenuToggle = styled.div`
  display: flex;
  align-items: center;
  z-index: ${({ theme }) => theme.zIndex.appBar}; 


  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MobileMenuOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  align-items: center;
  width: 100%;

  .MuiButton-root {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    width: 100%;
    max-width: 200px;
  }
`;
