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

const EXPERIENCE_KEYS = ['experience1', 'experience2'] as const;

export const Work: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Inner>
        <HeadingWrap>
          <Heading2 variant="h5">{t('nav.work')}</Heading2>
        </HeadingWrap>
        <CardList>
          {EXPERIENCE_KEYS.map((key) => {
            const url = t(`work.${key}.url`);
            const period = t(`work.${key}.period`);
            const title = t(`work.${key}.title`);
            const company = t(`work.${key}.company`);
            const description = t(`work.${key}.description`);
            const skillsStr: string = t(`work.${key}.skills`);
            const skills = skillsStr.split(',').map((s) => s.trim()).filter(Boolean);

            return (
              <StyledCard key={key} variant="outlined">
                <CardActionAreaFocusWrap>
                  <CardActionArea
                    component="a"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} at ${company}`}
                  >
                    <StyledCardContent>
                      <PeriodText variant="body2">{period}</PeriodText>
                      <TitleRow>
                        <Typography variant="h6" >
                          <Title>
                            {title}
                            <Separator> · </Separator>
                            {company}
                          </Title>
                        </Typography>
                        <LaunchWrap>
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
                    </StyledCardContent>
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

const HeadingWrap = styled.h2`
  margin: 0;
  font: inherit;
`;

const Heading2 = styled(Typography)`
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

const StyledCardContent = styled(CardContent)`
  padding: ${({ theme }) => theme.spacing(4)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};

  &:last-child {
    padding-bottom: ${({ theme }) => theme.spacing(4)};
  }
`;

const PeriodText = styled(Typography)`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

const Title = styled.span`
  font-weight: 700;  

  .separator {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-weight: 400;
  }
`;

const Separator = styled.span``;

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
`;
