'use client';

import React from 'react';
import { FormField, fieldInputClasses } from '@/src/components/common/FormField';
import type { Role } from '@/src/types/user.types';
import type { NewUserFormErrors, NewUserFormValues } from '@/src/hooks/useNewUserForm';

const ROLE_OPTIONS: Role[] = ['Administrator', 'Supervisor', 'Agent'];

export interface NewUserFormFieldsProps {
  values: NewUserFormValues;
  errors: NewUserFormErrors;
  touched: Partial<Record<keyof NewUserFormValues, boolean>>;
  teams: string[];
  onChange: <K extends keyof NewUserFormValues>(field: K, value: NewUserFormValues[K]) => void;
  onBlurField: (field: keyof NewUserFormValues) => void;
  firstnameInputRef: React.RefObject<HTMLInputElement | null>;
  lastnameInputRef: React.RefObject<HTMLInputElement | null>;
  passwordInputRef: React.RefObject<HTMLInputElement | null>;
  emailInputRef: React.RefObject<HTMLInputElement | null>;
  roleSelectRef: React.RefObject<HTMLSelectElement | null>;
  teamInputRef: React.RefObject<HTMLInputElement | null>;
}

export const NewUserFormFields: React.FC<NewUserFormFieldsProps> = ({
  values,
  errors,
  touched,
  teams,
  onChange,
  onBlurField,
  firstnameInputRef,
  lastnameInputRef,
  passwordInputRef,
  emailInputRef,
  roleSelectRef,
  teamInputRef,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <FormField label="First name" htmlFor="new-user-firstname" required error={touched.firstname ? errors.firstname : undefined}>
        <input
          id="new-user-firstname"
          ref={firstnameInputRef}
          type="text"
          autoComplete="given-name"
          value={values.firstname}
          onChange={(e) => onChange('firstname', e.target.value)}
          onBlur={() => onBlurField('firstname')}
          aria-invalid={Boolean(touched.firstname && errors.firstname)}
          aria-describedby={touched.firstname && errors.firstname ? 'new-user-firstname-error' : undefined}
          placeholder="e.g. Camila Rojas"
          className={fieldInputClasses(Boolean(touched.firstname && errors.firstname))}
        />
      </FormField>

      <FormField label="Last name" htmlFor="new-user-lastname" required error={touched.lastname ? errors.lastname : undefined}>
        <input
          id="new-user-lastname"
          ref={lastnameInputRef}
          type="text"
          autoComplete="family-name"
          value={values.lastname}
          onChange={(e) => onChange('lastname', e.target.value)}
          onBlur={() => onBlurField('lastname')}
          aria-invalid={Boolean(touched.lastname && errors.lastname)}
          aria-describedby={touched.lastname && errors.lastname ? 'new-user-lastname-error' : undefined}
          placeholder="e.g. Rojas"
          className={fieldInputClasses(Boolean(touched.lastname && errors.lastname))}
        />
      </FormField>

      <FormField label="Password" htmlFor="new-user-password" required error={touched.password ? errors.password : undefined}>
        <input
          id="new-user-password"
          ref={passwordInputRef}
          type="password"
          autoComplete="new-password"
          value={values.password}
          onChange={(e) => onChange('password', e.target.value)}
          onBlur={() => onBlurField('password')}
          aria-invalid={Boolean(touched.password && errors.password)}
          aria-describedby={touched.password && errors.password ? 'new-user-password-error' : undefined}
          placeholder="********"
          className={fieldInputClasses(Boolean(touched.password && errors.password))}
        />
      </FormField>

      <FormField label="Work email" htmlFor="new-user-email" required error={touched.email ? errors.email : undefined}>
        <input
          id="new-user-email"
          ref={emailInputRef}
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => onChange('email', e.target.value)}
          onBlur={() => onBlurField('email')}
          aria-invalid={Boolean(touched.email && errors.email)}
          aria-describedby={touched.email && errors.email ? 'new-user-email-error' : undefined}
          placeholder="name@callbook.co"
          className={fieldInputClasses(Boolean(touched.email && errors.email))}
        />
      </FormField>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Role" htmlFor="new-user-role" required error={touched.role ? errors.role : undefined}>
          <select
            id="new-user-role"
            ref={roleSelectRef}
            value={values.role}
            onChange={(e) => onChange('role', e.target.value as Role)}
            onBlur={() => onBlurField('role')}
            aria-invalid={Boolean(touched.role && errors.role)}
            aria-describedby={touched.role && errors.role ? 'new-user-role-error' : undefined}
            className={fieldInputClasses(Boolean(touched.role && errors.role))}
          >
            <option value="" disabled>
              Select a role
            </option>
            {ROLE_OPTIONS.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </FormField>

        <FormField label="Team" htmlFor="new-user-team" required error={touched.team ? errors.team : undefined}>
          <input
            id="new-user-team"
            ref={teamInputRef}
            type="text"
            list="new-user-team-suggestions"
            value={values.team}
            onChange={(e) => onChange('team', e.target.value)}
            onBlur={() => onBlurField('team')}
            aria-invalid={Boolean(touched.team && errors.team)}
            aria-describedby={touched.team && errors.team ? 'new-user-team-error' : undefined}
            placeholder="e.g. Billing"
            className={fieldInputClasses(Boolean(touched.team && errors.team))}
          />
          <datalist id="new-user-team-suggestions">
            {teams.map((team) => (
              <option key={team} value={team} />
            ))}
          </datalist>
        </FormField>
      </div>
    </div>
  );
};

export default NewUserFormFields;
