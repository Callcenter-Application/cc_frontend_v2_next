'use client';

import React from 'react';
import Sidebar from '@/src/components/dashboard/sidebar/Sidebar';
import Header from '@/src/components/dashboard/header/Header';
import UsersView from '@/src/components/dashboard/users/UsersView';

export interface UsersPageProps {
  /** Accent color used for the logo, active nav item and primary button. */
  accent?: string;
}

export default function UsersPage({ accent = '#6E4F68' }: UsersPageProps) {
  return (
    <div className="flex flex-wrap min-h-[800px] font-sans text-[#1F1C1E] bg-[#F4F2EF]">
      {/* Sidebar */}
      <Sidebar accent={accent} />

      {/* Content */}
      <div className="flex-[999_1_560px] min-w-0 box-border p-4 md:p-[16px_28px_28px] flex flex-col gap-4">
        {/* Top Header */}
        <Header />

        {/* Users Content */}
        <UsersView accent={accent} />
      </div>
    </div>
  );
}