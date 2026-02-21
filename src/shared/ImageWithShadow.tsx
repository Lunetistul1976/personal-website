import React from 'react';
import styled from 'styled-components';

export interface ImageWithShadowProps {
  imageUrl: string;
  alt?: string;
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 20rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 22rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  position: relative;
  z-index: 1;
  object-fit: cover;
`;

const Shadow = styled.div`
  position: absolute;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transform: translate(12px, 12px);
  z-index: 0;
`;

export const ImageWithShadow: React.FC<ImageWithShadowProps> = ({
  imageUrl,
  alt = '',
}) => (
  <Wrapper>
    <Image src={imageUrl} alt={alt} />
    <Shadow />
  </Wrapper>
);
