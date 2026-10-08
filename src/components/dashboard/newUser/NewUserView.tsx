'use client';

import React, { useMemo, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, useReducedMotion } from 'motion/react';
import { useUsersContext } from '@/src/contexts/UsersContext';
import { useNewUserForm } from '@/src/hooks/useNewUserForm';
import { NewUserFormFields } from './NewUserFormFields';
import { NewUserPreviewCard } from './NewUserPreviewCard';

export interface NewUserViewProps {
  className?: string;
}

export const NewUserView: React.FC<NewUserViewProps> = ({ className = '' }) => {
  const router = useRouter();
  const { users, addUser } = useUsersContext();
  const prefersReducedMotion = useReducedMotion();

  const existingEmails = useMemo(() => users.map((u) => u.email), [users]);
  const teams = useMemo(
    () => Array.from(new Set(users.map((u) => u.team))).sort((a, b) => a.localeCompare(b)),
    [users]
  );

  const { values, touched, errors, isValid, setField, touchField, touchAll, toCreateInput } =
    useNewUserForm({ existingEmails });

  const firstnameInputRef = useRef<HTMLInputElement>(null);
  const lastnameInputRef = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const roleSelectRef = useRef<HTMLSelectElement>(null);
  const teamInputRef = useRef<HTMLInputElement>(null);

  const goBack = () => router.push('/dashboard/users');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValid) {
      touchAll();
      const firstInvalid = (
        [
          ['firstname', firstnameInputRef],
          ['lastname', lastnameInputRef],
          ['password', password],
          ['email', emailInputRef],
          ['role', roleSelectRef],
          ['team', teamInputRef],
        ] as const
      ).find(([field]) => errors[field]);
      firstInvalid?.[1].current?.focus();
      return;
    }

    const input = toCreateInput();
    if (!input) return;

    addUser(input);
    router.push('/dashboard/users');
  };

  return (
    <div className={`flex flex-col gap-4 h-full min-h-0 ${className}`}>
      <div className="flex flex-wrap items-center gap-3 p-1">
        <div className="flex flex-col gap-[2px] mr-auto">
          <button
            type="button"
            onClick={goBack}
            className="self-start -ml-1 mb-1 text-[13px] text-[#50677D] hover:text-[#10273D] inline-flex items-center gap-1 transition-colors active:scale-[0.98]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18 9 12l6-6" />
            </svg>
            Back to users
          </button>
          <h1 className="m-0 text-[26px] font-semibold tracking-[-0.015em] text-[#10273D]">
            New user
          </h1>
          <span className="text-[14px] text-[#50677D]">
            Add a supervisor, agent or administrator to CallBook
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goBack}
            className="h-11 px-4.5 border border-[#C9DCEC] rounded-lg bg-white text-[#34506A] font-medium text-[14px] cursor-pointer hover:bg-[#F0F6FC] transition-colors active:scale-[0.98]"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="new-user-form"
            className="h-11 px-4.5 border-0 rounded-lg text-white font-medium text-[14px] cursor-pointer bg-[#2B7BC0] hover:opacity-90 transition-opacity active:scale-[0.98]"
          >
            Create user
          </button>
        </div>
      </div>

      <motion.main
        initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
        animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={prefersReducedMotion ? { duration: 0.15 } : { type: 'spring', bounce: 0, duration: 0.4 }}
        className="flex-1 min-h-0 overflow-y-auto bg-white border border-[#D6E4F0] rounded-xl p-5 min-w-0"
      >
        <form
          id="new-user-form"
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6 items-start"
        >
          <NewUserFormFields
            values={values}
            errors={errors}
            touched={touched}
            teams={teams}
            onChange={setField}
            onBlurField={touchField}
            firstnameInputRef={firstnameInputRef}
            lastnameInputRef={lastnameInputRef}
            passwordInputRef={password}
            emailInputRef={emailInputRef}
            roleSelectRef={roleSelectRef}
            teamInputRef={teamInputRef}
          />

          <NewUserPreviewCard
            firstname={values.firstname}
            lastname={values.lastname}
            email={values.email}
            role={values.role}
            team={values.team}
          />
        </form>
      </motion.main>
    </div>
  );
};

export default NewUserView;
