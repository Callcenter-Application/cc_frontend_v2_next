'use client';

import React from 'react';
import Sidebar, { type SidebarProps } from './dashboard/sidebar/Sidebar';

export const SidebarComponent: React.FC<SidebarProps> = (props) => {
  return <Sidebar {...props} />;
};

export default SidebarComponent;