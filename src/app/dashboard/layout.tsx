import type { ReactNode } from 'react';
import HeaderComponent from '@/src/components/header.component';
import SidebarComponent from '@/src/components/sideBar.component';

export interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex flex-wrap min-h-screen font-sans text-[#1F1C1E] bg-[#F4F2EF]">
      <SidebarComponent />
      <div className="flex-[999_1_560px] min-w-0 box-border p-4 md:p-[16px_28px_28px] flex flex-col gap-4">
        <HeaderComponent />
        {children}
      </div>
    </div>
  );
}