import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Typography } from '@mui/material';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <FooterStack>
        <Body2Secondary variant="body2">{t('footer.rights')}</Body2Secondary>
        <Body2Secondary variant="body2">{t('footer.codedBy')}</Body2Secondary>
      </FooterStack>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const FooterStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

const Body2Secondary = styled(Typography)`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;
