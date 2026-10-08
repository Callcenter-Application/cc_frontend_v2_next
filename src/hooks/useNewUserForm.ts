import { useMemo, useState } from 'react';
import type { CreateUserInput, Role } from '@/src/types/user.types';

export interface NewUserFormValues {
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  role: Role | '';
  team: string;
}

export type NewUserFormErrors = Partial<Record<keyof NewUserFormValues, string>>;

export interface UseNewUserFormOptions {
  existingEmails: string[];
}

const FIRST_NAME_PATTERN = /^[A-Za-zÀ-ÖØ-öø-ÿ'’\s-]{2,30}$/;
const LAST_NAME_PATTERN = /^[A-Za-zÀ-ÖØ-öø-ÿ'’\s-]{2,30}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: NewUserFormValues, existingEmailsLower: string[]): NewUserFormErrors {
  const errors: NewUserFormErrors = {};

  const firstname = values.firstname.trim();
  const lastname = values.lastname.trim();

  if (!firstname && !lastname) errors.firstname = 'Enter the user’s firstname and lastname.';
  else if (!FIRST_NAME_PATTERN.test(firstname) || !LAST_NAME_PATTERN.test(lastname)) errors.firstname = 'Use letters only.';

  const email = values.email.trim();
  if (!email) errors.email = 'Enter a work email.';
  else if (!EMAIL_PATTERN.test(email)) errors.email = 'Enter a valid email address.';
  else if (existingEmailsLower.includes(email.toLowerCase())) {
    errors.email = 'This email is already in use.';
  }

  if (!values.role) errors.role = 'Select a role.';

  const team = values.team.trim();
  if (!team) errors.team = 'Enter a team.';
  else if (team.length < 2) errors.team = 'Team name is too short.';

  return errors;
}

export function useNewUserForm({ existingEmails }: UseNewUserFormOptions) {
  const [values, setValues] = useState<NewUserFormValues>({
    firstname: '',
    lastname: '',
    password: '',
    email: '',
    role: '',
    team: '',
  });
  const [touched, setTouched] = useState<Partial<Record<keyof NewUserFormValues, boolean>>>({});

  const existingEmailsLower = useMemo(
    () => existingEmails.map((e) => e.toLowerCase()),
    [existingEmails]
  );
  const errors = useMemo(() => validate(values, existingEmailsLower), [values, existingEmailsLower]);
  const isValid = Object.keys(errors).length === 0;

  const setField = <K extends keyof NewUserFormValues>(field: K, value: NewUserFormValues[K]) => {
    setValues((v) => ({ ...v, [field]: value }));
  };

  const touchField = (field: keyof NewUserFormValues) => {
    setTouched((t) => (t[field] ? t : { ...t, [field]: true }));
  };

  const touchAll = () => {
    setTouched({ firstname: true, lastname: true, email: true, role: true, team: true });
  };

  const toCreateInput = (): CreateUserInput | null => {
    if (!isValid || !values.role) return null;
    return {
      firstname: values.firstname.trim(),
      lastname: values.lastname.trim(),
      password: values.password.trim(),
      email: values.email.trim(),
      role: values.role,
      team: values.team.trim(),
    };
  };

  return {
    values,
    touched,
    errors,
    isValid,
    setField,
    touchField,
    touchAll,
    toCreateInput,
  };
}

export default useNewUserForm;
