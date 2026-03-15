import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Typography } from '@mui/material';

export const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Inner>
        <ContentStack>
          <SectionHeadingWrap>
            <SectionHeading variant="h5">{t('nav.projects')}</SectionHeading>
          </SectionHeadingWrap>
          <BodySecondary variant="body1">
            {t('projects.placeholder', 'Selected projects and case studies coming soon.')}
          </BodySecondary>
        </ContentStack>
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
  min-height: 0;
  padding: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.background};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing(10)} ${({ theme }) => theme.spacing(6)};
  }
`;

const Inner = styled.div`
  max-width: 75rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  align-items: center;
  text-align: center;
`;

const ContentStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const SectionHeadingWrap = styled.h2`
  margin: 0;
  font: inherit;
`;

const SectionHeading = styled(Typography)`
  color: ${({ theme }) => theme.colors.text.primary};
`;

const BodySecondary = styled(Typography)`
  color: ${({ theme }) => theme.colors.text.secondary};
`;
