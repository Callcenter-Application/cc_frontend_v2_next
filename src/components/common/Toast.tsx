'use client';

import React from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

export interface ToastProps {
  open: boolean;
  title: string;
  description?: string;
  onDismiss?: () => void;
}

export const Toast: React.FC<ToastProps> = ({ open, title, description, onDismiss }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      aria-live="polite"
      className="fixed bottom-5 right-5 z-50 pointer-events-none"
    >
      <AnimatePresence>
        {open && (
          <motion.div
            role="status"
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.96 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.98 }}
            transition={
              prefersReducedMotion
                ? { duration: 0.15 }
                : { type: 'spring', bounce: 0, duration: 0.4 }
            }
            className="pointer-events-auto flex items-start gap-3 w-[300px] p-[14px_16px] rounded-[14px] bg-white shadow-[0_12px_32px_rgba(16,39,61,0.18)] border border-[#E6EFF7]"
          >
            <span className="mt-[2px] w-5 h-5 rounded-full bg-[#DDF2F2] text-[#1D5C5E] shrink-0 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <div className="flex flex-col gap-[2px] min-w-0">
              <span className="text-[14px] font-medium text-[#10273D]">{title}</span>
              {description && (
                <span className="text-[13px] text-[#50677D]">{description}</span>
              )}
            </div>
            <button
              type="button"
              aria-label="Dismiss"
              onClick={onDismiss}
              className="ml-auto -mr-1 -mt-1 w-7 h-7 rounded-full text-[#9AAEC1] hover:text-[#50677D] hover:bg-[#F0F6FC] flex items-center justify-center shrink-0 transition-colors active:scale-[0.92]"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Toast;
