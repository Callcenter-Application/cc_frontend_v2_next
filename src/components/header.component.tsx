'use client';

import React from 'react';
import Header, { type HeaderProps } from './dashboard/header/Header';

export const HeaderComponent: React.FC<HeaderProps> = (props) => {
  return <Header {...props} />;
};

export default HeaderComponent;