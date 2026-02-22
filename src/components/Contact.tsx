import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Typography } from '@mui/material';

export const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Inner>
        <Typography variant="h5">{t('nav.contact')}</Typography>
        <Typography variant="body1" color="text.secondary">
          {t('contact.placeholder', 'Get in touch — contact form or details coming soon.')}
        </Typography>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  min-height: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing(10)} ${({ theme }) => theme.spacing(6)};
  }
`;

const Inner = styled.div`
  max-width: 75rem;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  align-items: center;
  text-align: center;
  width: 100%;
`;
