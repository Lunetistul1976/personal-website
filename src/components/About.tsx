import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import { ImageWithShadow } from '../shared/ImageWithShadow';

const ABOUT_IMAGE_URL = '/about.png';

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Inner>
        <ContentRow>
          <ImageColumn>
            <ImageWithShadow
              imageUrl={ABOUT_IMAGE_URL}
              alt={t('about.imageAlt')}
            />
          </ImageColumn>
          <TextColumn>
            <Heading5 variant="h5">{t('about.heading')}</Heading5>
            <BodySecondary variant="body1">{t('about.paragraph1')}</BodySecondary>
            <BodySecondary variant="body1">{t('about.paragraph2')}</BodySecondary>
            <BodySecondary variant="body1">{t('about.paragraph3')}</BodySecondary>
          </TextColumn>
        </ContentRow>
      </Inner>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
  padding: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.background};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing(10)} ${({ theme }) => theme.spacing(6)};
  }
`;

const Inner = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  align-items: center;
`;

const ContentRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing(8)};
  }
`;

const ImageColumn = styled.div`
  flex-shrink: 0;
`;

const TextColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  text-align: left;
  min-width: 0;
  max-width: 36rem;
`;

const Heading5 = styled(Typography)`
  color: ${({ theme }) => theme.colors.text.primary};
`;

const BodySecondary = styled(Typography)`
  color: ${({ theme }) => theme.colors.text.secondary};
`;
