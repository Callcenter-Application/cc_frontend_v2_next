'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { MoreDotsIcon } from './Icons';

export interface ActionsMenuItem {
  key: string;
  label: string;
  onSelect?: () => void;
  /** When set, selecting the item copies this text instead of calling onSelect, and the item briefly confirms "Copied". */
  copyText?: string;
  tone?: 'default' | 'danger';
}

export interface ActionsMenuProps {
  items: ActionsMenuItem[];
  ariaLabel?: string;
  className?: string;
}

export const ActionsMenu: React.FC<ActionsMenuProps> = ({
  items,
  ariaLabel = 'More actions',
  className = '',
}) => {
  const [open, setOpen] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const handleSelect = (item: ActionsMenuItem) => {
    if (item.copyText) {
      navigator.clipboard?.writeText(item.copyText).catch(() => {});
      setCopiedKey(item.key);
      window.setTimeout(() => {
        setCopiedKey(null);
        setOpen(false);
      }, 800);
      return;
    }
    setOpen(false);
    item.onSelect?.();
  };

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={`relative inline-block ${className}`}>
      <button
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="w-9 h-9 border-0 rounded-lg bg-transparent text-[#34506A] cursor-pointer inline-flex items-center justify-center hover:bg-[#F0F6FC] active:scale-[0.94] transition-[background-color,transform]"
      >
        <MoreDotsIcon className="w-[18px] h-[18px]" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            style={{ transformOrigin: 'top right' }}
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92, y: -4 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: -2 }}
            transition={
              prefersReducedMotion
                ? { duration: 0.1 }
                : { type: 'spring', bounce: 0, duration: 0.3 }
            }
            className="absolute right-0 top-[calc(100%+6px)] z-20 w-[180px] p-[6px] rounded-[12px] bg-white border border-[#E6EFF7] shadow-[0_14px_30px_rgba(16,39,61,0.16)]"
          >
            {items.map((item) => (
              <button
                key={item.key}
                type="button"
                role="menuitem"
                onClick={() => handleSelect(item)}
                className={`w-full text-left h-9 px-[10px] rounded-[8px] text-[13px] flex items-center transition-colors active:scale-[0.98] ${
                  item.tone === 'danger'
                    ? 'text-[#B3432F] hover:bg-[#FBEAE6]'
                    : 'text-[#10273D] hover:bg-[#F0F6FC]'
                }`}
              >
                {copiedKey === item.key ? 'Copied ✓' : item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ActionsMenu;
