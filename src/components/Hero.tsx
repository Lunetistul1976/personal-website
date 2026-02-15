import React from 'react';
import styled from 'styled-components';
import { Typography, Link } from '@mui/material';
import { Location } from '@carbon/icons-react';
import { socials } from '../utils/socials';

const HERO_DESCRIPTION =
  "Frontend Engineer specialized in React and TypeScript with experience building scalable design systems and AI-powered features. Strong background in component-driven architecture, GraphQL APIs, and experimentation-driven product development. Passionate about AI-augmented workflows.";

export const Hero: React.FC = () => (
    <HeroSection>
      <HeroInner>
        <TextBlock>
          <HeroTitle variant="h3">Hi, I'm Rares 👋</HeroTitle>
          <HeroDescription variant="body1" color="text.secondary">
            {HERO_DESCRIPTION}
          </HeroDescription>
          <MetaSocialWrap>
            <MetaRow>
              <LocationIcon size={20} />
              <Typography variant="body2" color="text.secondary">
                Bucharest, Romania
              </Typography>
            </MetaRow>
            <SocialRow>
            {socials.map(({ key, Icon, href }) => (
              <Link
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={key}
                color="text.secondary"
                underline="none"
              >
                <Icon size={24} />
              </Link>
            ))}
            </SocialRow>
          </MetaSocialWrap>
        </TextBlock>
        <ImageBlock>
          <ImageWrapper>
            <HeroImage src="/hero.png" alt="Rares" />
            <ImageShadow />
          </ImageWrapper>
        </ImageBlock>
      </HeroInner>
    </HeroSection>
);

const HeroSection = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 0;
`;

const HeroInner = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing(8)};
    align-items: center;
    justify-content: space-between;
  }
`;

const TextBlock = styled.div`
  flex: 1;
  text-align: left;
  order: 2;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    order: 1;
    max-width: 36rem;
  }
`;

const HeroTitle = styled(Typography)`
  font-weight: 700;
  line-height: 1.2;
  font-size: 2.25rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroDescription = styled(Typography)`
  line-height: 1.6;
`;

const MetaSocialWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

const LocationIcon = styled(Location)`
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const SocialRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const ImageBlock = styled.div`
  flex-shrink: 0;
  order: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    order: 2;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 20rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 22rem;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  position: relative;
  z-index: 1;
  object-fit: cover;
`;

const ImageShadow = styled.div`
  position: absolute;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transform: translate(12px, 12px);
  z-index: 0;
`;
