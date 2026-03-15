import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Link, Typography } from '@mui/material';
import { Location } from '@carbon/icons-react';
import { socials } from '../utils/socials';
import { ImageWithShadow } from '../shared/ImageWithShadow';

const WAVE_EMOJI = '👋';

const WaveEmoji = styled.span`
  display: inline-block;
  animation: waveHand 9s ease-in-out 1;
  transform-origin: 70% 70%;
  @keyframes waveHand {
    0%, 11%, 33%, 44%, 66%, 77%, 100% { transform: rotate(0deg); }
    16% { transform: rotate(-25deg); }
    22% { transform: rotate(20deg); }
    49% { transform: rotate(-25deg); }
    55% { transform: rotate(20deg); }
    82% { transform: rotate(-25deg); }
    88% { transform: rotate(20deg); }
  }
`;

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const title = t('hero.title');
  const [before, after] = title.includes(WAVE_EMOJI)
    ? title.split(WAVE_EMOJI)
    : [title, ''];

  return (
    <HeroSection>
      <HeroInner>
        <TextBlock>
          <HeroTitle variant="h3">
            {before}
            {title.includes(WAVE_EMOJI) && (
              <WaveEmoji aria-hidden="true">{WAVE_EMOJI}</WaveEmoji>
            )}
            {after}
          </HeroTitle>
          <HeroDescription variant="body1">
            {t('hero.description')}
          </HeroDescription>
          <MetaSocialStack>
            <MetaRow>
              <LocationWrap aria-hidden>
                <Location size={20} />
              </LocationWrap>
              <Body2Secondary variant="body2">
                {t('hero.location')}
              </Body2Secondary>
            </MetaRow>
            <SocialRow>
              {socials.map(({ key, Icon, href }) => (
                <StyledLink
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={key}
                  underline="none"
                >
                  <Icon size={24} />
                </StyledLink>
              ))}
            </SocialRow>
          </MetaSocialStack>
        </TextBlock>
        <ImageBlock>
          <ImageWithShadow imageUrl="/hero.png" alt={t('hero.imageAlt')} />
        </ImageBlock>
      </HeroInner>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(4)};
  padding-top: ${({ theme }) => theme.spacing(8)};
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: ${({ theme }) => theme.spacing(6)};
  }
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
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 700;
  line-height: 1.2;
  font-size: ${({ theme }) => theme.typography.fontSize.xxxl};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.display};
  }
`;

const HeroDescription = styled(Typography)`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
`;

const MetaSocialStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

const LocationWrap = styled.div`
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  display: inline-flex;
`;

const SocialRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const Body2Secondary = styled(Typography)`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const StyledLink = styled(Link)`
  display: inline-flex;
  color: ${({ theme }) => theme.colors.text.secondary};

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const ImageBlock = styled.div`
  flex-shrink: 0;
  order: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    order: 2;
  }
`;
