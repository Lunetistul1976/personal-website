import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Button, IconButton, Divider, Select, MenuItem } from '@mui/material';
import { useTheme } from '../context/ThemeContext';
import { supportedLanguages, type LanguageCode } from '../i18n';
import { Menu, Close, AsleepFilled, LightFilled } from '@carbon/icons-react';

const navItems = [
  { to: '/', labelKey: 'nav.home' as const },
  { to: '/about', labelKey: 'nav.about' as const },
  { to: '/work', labelKey: 'nav.work' as const },
  { to: '/contact', labelKey: 'nav.contact' as const },
] as const;

export const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { toggleTheme, theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const currentLang = supportedLanguages.some((l) => l.code === i18n.language)
    ? i18n.language
    : (i18n.language?.slice(0, 2) as LanguageCode) || 'en';

  const handleLanguageChange = (code: LanguageCode) => {
    i18n.changeLanguage(code);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Resume.pdf';
    link.setAttribute('download', 'Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  return (
  <NavContainer>
    <NavInner>
      <Logo as={Link} to="/">&lt;RV /&gt;</Logo>

      <NavDirectLinks>
        {navItems.map(({ to, labelKey }) => (
          <Button
            key={to}
            variant="text"
            to={to}
            component={Link}
            sx={
              location.pathname === to
                ? { color: 'text.primary', fontWeight: 600 }
                : undefined
            }
          >
            {t(labelKey)}
          </Button>
        ))}

        <StyledSelect
          value={currentLang}
          onChange={(e) => handleLanguageChange(e.target.value as LanguageCode)}
          size="small"
          
        >
          {supportedLanguages.map(({ code, label }) => (
            <MenuItem key={code} value={code}>{label}</MenuItem>
          ))}
        </StyledSelect>

        <Divider orientation="vertical" flexItem />

        <IconButton onClick={toggleTheme} aria-label={t('nav.toggleTheme')} size="medium">
          {theme.name === 'dark' ? <LightFilled /> : <AsleepFilled />}
        </IconButton>

        <Button variant="contained" size="medium" onClick={handleDownloadCV}>
          {t('nav.downloadCv')}
        </Button>
      </NavDirectLinks>

      <MobileMenuToggle>
        <IconButton onClick={toggleTheme} aria-label={t('nav.toggleTheme')} size="medium">
          {theme.name === 'dark' ? <LightFilled /> : <AsleepFilled />}
        </IconButton>

        <IconButton onClick={toggleMenu} aria-label={t('nav.toggleMenu')}>
          {isMenuOpen ? <Close size={24} /> : <Menu size={24} />}
        </IconButton>
      </MobileMenuToggle>
    </NavInner>

    <MobileMenuOverlay $isOpen={isMenuOpen}>
      <MobileNavLinks>
        {navItems.map(({ to, labelKey }) => (
          <Button
            key={to}
            variant="text"
            component={Link}
            to={to}
            onClick={closeMenu}
            sx={
              location.pathname === to
                ? { color: 'text.primary', fontWeight: 600 }
                : undefined
            }
          >
            {t(labelKey)}
          </Button>
        ))}

        <StyledSelect
          value={currentLang}
          onChange={(e) => handleLanguageChange(e.target.value as LanguageCode)}
          size="small"
          fullWidth
        >
          {supportedLanguages.map(({ code, label }) => (
            <MenuItem key={code} value={code}>{label}</MenuItem>
          ))}
        </StyledSelect>

        <Button variant="contained" size="medium" onClick={handleDownloadCV}>
          {t('nav.downloadCv')}
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
  text-decoration: none;


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

const MobileMenuOverlay = styled.div<{ $isOpen: boolean }>`
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
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
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

const StyledSelect = styled(Select)`
  max-width: 120px;
`;
