import React from 'react';
import Link from 'next/link';
import { PhoneIcon } from '@/src/components/common/Icons';

export interface SidebarLogoProps {
  accent?: string;
  className?: string;
}

export const SidebarLogo: React.FC<SidebarLogoProps> = ({
  accent = '#6E4F68',
  className = '',
}) => {
  return (
    <Link
      href="/dashboard"
      className={`flex items-center gap-[10px] px-2 text-inherit no-underline ${className}`}
    >
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
        style={{ backgroundColor: accent }}
      >
        <PhoneIcon className="w-[18px] h-[18px] stroke-white" />
      </div>
      <span className="text-[18px] font-semibold tracking-[-0.01em] text-[#E9E5E8]">
        CallBook
      </span>
    </Link>
  );
};

export default SidebarLogo;
