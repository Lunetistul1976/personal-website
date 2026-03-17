import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import {
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Typography,
} from '@mui/material';
import { Launch } from '@carbon/icons-react';

const PROJECT_KEYS = ['project1', 'project2'] as const;

const PROJECT_IMAGES: Record<(typeof PROJECT_KEYS)[number], string> = {
  project1: '/raresvlad-portfolio.png',
  project2: '/physics-gpt.png',
};

export const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Inner>
        <ContentStack>
          
            <SectionHeading variant="h5">{t('nav.projects')}</SectionHeading>
          
        </ContentStack>
        <CardList>
          {PROJECT_KEYS.map((key) => {
            const title = t(`projects.${key}.title`);
            const description = t(`projects.${key}.description`);
            const url = t(`projects.${key}.url`);
            const skillsStr: string = t(`projects.${key}.skills`);
            const skills = skillsStr.split(',').map((s) => s.trim()).filter(Boolean);
            const imgSrc = PROJECT_IMAGES[key];
            const isExternal = url.startsWith('http');

            return (
              <StyledCard key={key} variant="outlined">
                <CardActionAreaFocusWrap>
                  <CardActionArea
                    component="a"
                    href={url}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    aria-label={title}
                  >
                    <CardContentInner>
                      <ThumbnailWrap>
                        <Thumbnail src={imgSrc} alt="" />
                      </ThumbnailWrap>
                      <TextBlock>
                        <TitleRow>
                          <Title variant="h6" >
                            {title}
                          </Title>
                          <LaunchWrap aria-hidden>
                            <Launch size={18} />
                          </LaunchWrap>
                        </TitleRow>
                        <BodyText variant="body1">{description}</BodyText>
                        <SkillsRow>
                          {skills.map((skill) => (
                            <StyledChip
                              key={skill}
                              label={skill}
                              size="small"
                              variant="outlined"
                            />
                          ))}
                        </SkillsRow>
                      </TextBlock>
                    </CardContentInner>
                  </CardActionArea>
                </CardActionAreaFocusWrap>
              </StyledCard>
            );
          })}
        </CardList>
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
  align-items: stretch;
`;

const ContentStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;



const SectionHeading = styled(Typography)`
  color: ${({ theme }) => theme.colors.text.primary};
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

const StyledCard = styled(Card)`
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surface};
  overflow: hidden;

  &:hover {
    border-color: ${({ theme }) => theme.colors.neon.cyan};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const CardActionAreaFocusWrap = styled.div`
  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.colors.neon.cyan};
    outline-offset: 2px;
  }
`;

const CardContentInner = styled(CardContent)`
  padding: ${({ theme }) => theme.spacing(4)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  align-items: stretch;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: flex-start;
  }

  &:last-child {
    padding-bottom: ${({ theme }) => theme.spacing(4)};
  }
`;

const ThumbnailWrap = styled.div`
  flex-shrink: 0;
  width: 100%;
  max-width: 280px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  aspect-ratio: 16 / 10;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 200px;
    max-width: none;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const TextBlock = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

const LaunchWrap = styled.div`
  display: inline-flex;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.text.secondary};

  .MuiCardActionArea:hover & {
    color: ${({ theme }) => theme.colors.neon.cyan};
  }
`;

const BodyText = styled(Typography)`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
`;

const SkillsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(1)};
`;

const StyledChip = styled(Chip)`
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text.secondary};
`;
