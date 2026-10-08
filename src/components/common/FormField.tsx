'use client';

import React from 'react';

export interface FormFieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  htmlFor,
  error,
  hint,
  required,
  children,
  className = '',
}) => {
  return (
    <div className={`flex flex-col gap-[6px] ${className}`}>
      <label htmlFor={htmlFor} className="text-[13px] font-medium text-[#34506A]">
        {label}
        {required && <span className="text-[#B3432F]"> *</span>}
      </label>
      {children}
      {error ? (
        <span id={`${htmlFor}-error`} role="alert" className="text-[12px] text-[#B3432F]">
          {error}
        </span>
      ) : hint ? (
        <span className="text-[12px] text-[#50677D]">{hint}</span>
      ) : null}
    </div>
  );
};

export const fieldInputClasses = (hasError?: boolean) =>
  `h-11 w-full px-[14px] box-border bg-white border rounded-lg text-[14px] text-[#10273D] placeholder:text-[#9AAEC1] outline-none transition-colors ${
    hasError
      ? 'border-[#E0A29A] focus:border-[#B3432F]'
      : 'border-[#C9DCEC] focus:border-[#2B7BC0]'
  }`;

export default FormField;
