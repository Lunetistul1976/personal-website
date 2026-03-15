import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const RADIUS = 480;
const GLOW_OPACITY = 0.12;

interface GlowLayerProps {
  $x: number;
  $y: number;
  $visible: boolean;
}

const GlowLayer = styled.div<GlowLayerProps>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.2s ease;
  background: radial-gradient(
    circle ${RADIUS}px at ${({ $x }) => $x}px ${({ $y }) => $y}px,
    rgba(59, 130, 246, ${GLOW_OPACITY}) 0%,
    rgba(30, 64, 175, 0.08) 50%,
    transparent 70%
  );
`;

export const CursorGlow: React.FC = () => {
  const { mode } = useTheme();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const handleMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    if (!isVisible) setIsVisible(true);
  }, [isVisible]);

  const handleLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMove);
    document.documentElement.addEventListener('mouseleave', handleLeave);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.documentElement.removeEventListener('mouseleave', handleLeave);
    };
  }, [handleMove, handleLeave]);

  if (mode !== 'dark') return null;

  return (
    <GlowLayer
      aria-hidden
      $x={position.x}
      $y={position.y}
      $visible={isVisible}
    />
  );
};
