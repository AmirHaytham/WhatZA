import React from 'react';

interface IconProps {
  color?: string;
}

export const CheckIcon: React.FC<IconProps> = ({ color = '#8696a0' }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M3.5 8L6.5 11L12.5 5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DoubleCheckIcon: React.FC<IconProps> = ({ color = '#8696a0' }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M1.5 8L4.5 11L10.5 5M5.5 8L8.5 11L14.5 5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
); 