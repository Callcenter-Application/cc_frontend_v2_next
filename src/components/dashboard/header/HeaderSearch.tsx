'use client';

import React from 'react';
import { SearchIcon } from '@/src/components/common/Icons';

export interface HeaderSearchProps {
  id?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const HeaderSearch: React.FC<HeaderSearchProps> = ({
  id = 'user-search',
  value,
  onChange,
  placeholder = 'Search users by ID, name, email…',
  className = '',
}) => {
  return (
    <label
      htmlFor={id}
      className={`flex-[1_1_260px] max-w-[420px] flex items-center gap-2 h-10 px-3 box-border bg-white border border-[#DDD7D1] rounded-lg text-[#6B6560] focus-within:border-[#6E4F68] transition-colors ${className}`}
    >
      <SearchIcon className="w-4 h-4 shrink-0" />
      <input
        id={id}
        type="search"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="border-0 outline-none flex-1 min-w-0 font-inherit text-[14px] bg-transparent text-[#1F1C1E] placeholder:text-[#6B6560]"
      />
    </label>
  );
};

export default HeaderSearch;
