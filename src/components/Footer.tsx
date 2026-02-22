import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Typography } from '@mui/material';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Typography variant="body2" color="text.secondary">
        {t('footer.rights')}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {t('footer.codedBy')}
      </Typography>
    </Container>
  );
};

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  width: 100%;
  padding: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;
