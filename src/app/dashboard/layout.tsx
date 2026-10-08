import type { ReactNode } from 'react';
import HeaderComponent from '@/src/components/header.component';
import SidebarComponent from '@/src/components/sideBar.component';
import { UsersProvider } from '@/src/contexts/UsersContext';

export interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <UsersProvider>
      <div className="flex flex-wrap h-screen overflow-hidden font-sans text-[#10273D] bg-[#F0F6FC]">
        <SidebarComponent />
        <div className="flex-[999_1_560px] min-w-0 h-full min-h-0 box-border p-4 md:p-[16px_28px_28px] flex flex-col gap-4 overflow-hidden">
          <HeaderComponent />
          {children}
        </div>
      </div>
    </UsersProvider>
  );
}