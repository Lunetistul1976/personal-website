import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Typography, Chip } from '@mui/material';
import { ImageWithShadow } from '../shared/ImageWithShadow';

const ABOUT_IMAGE_URL = '/about.png';

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Inner>
        <ChipWrapper>
          <Chip label={t('about.chipLabel')} variant="filled" size="medium" color="info" />
        </ChipWrapper>
        <ContentRow>
          <ImageColumn>
            <ImageWithShadow
              imageUrl={ABOUT_IMAGE_URL}
              alt={t('about.imageAlt')}
            />
          </ImageColumn>
          <TextColumn>
          
          <Typography variant="h5">{t('about.heading')}</Typography>
          <Typography variant="body1" color="text.secondary">
            {t('about.paragraph1')}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {t('about.paragraph2')}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {t('about.paragraph3')}
          </Typography>
        </TextColumn>
        </ContentRow>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  width: 100%;
  padding: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.background};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing(10)} ${({ theme }) => theme.spacing(6)};
  }
`;

const ChipWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  align-items: center;
  width: 100%;
`;

const ContentRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  align-items: center;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing(8)};
  }
`;

const ImageColumn = styled.div`
  flex-shrink: 0;
  order: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    order: 1;
  }
`;

const TextColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  text-align: left;
  order: 2;
  min-width: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    order: 2;
    max-width: 36rem;
  }
`;

