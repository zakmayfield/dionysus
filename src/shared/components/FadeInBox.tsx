'use client';
import React from 'react';
import { MotionBox, MotionBoxProps } from './motion-chakra';

export const FadeInBox: React.FC<React.PropsWithChildren & MotionBoxProps> = ({
  children,
  ...props
}) => {
  return (
    <MotionBox
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1 }}
      {...props}
    >
      {children}
    </MotionBox>
  );
};
