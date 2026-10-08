'use client';

import Link from 'next/link';
import { PhoneIcon } from '@/src/components/common/Icons';
import { FormField, fieldInputClasses } from '@/src/components/common/FormField';

const LoginPage = () => {
  return (
    <div className="flex flex-1 items-center justify-center bg-[#F0F6FC] p-4">
      <div className="w-full max-w-[380px] flex flex-col gap-6">
        <div className="flex items-center justify-center gap-[10px]">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-[#2B7BC0]">
            <PhoneIcon className="w-[18px] h-[18px] stroke-white" />
          </div>
          <span className="text-[19px] font-semibold tracking-[-0.01em] text-[#10273D]">
            CallBook
          </span>
        </div>

        <div className="bg-white border border-[#D6E4F0] rounded-xl p-6 flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h1 className="m-0 text-[20px] font-semibold tracking-[-0.01em] text-[#10273D]">
              Sign in
            </h1>
            <span className="text-[13px] text-[#50677D]">
              Welcome back to your operations dashboard
            </span>
          </div>

          <form className="flex flex-col gap-4">
            <FormField label="Email" htmlFor="login-email">
              <input
                id="login-email"
                type="email"
                autoComplete="email"
                placeholder="name@callbook.co"
                className={fieldInputClasses()}
              />
            </FormField>

            <FormField label="Password" htmlFor="login-password">
              <input
                id="login-password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                className={fieldInputClasses()}
              />
            </FormField>

            <Link
              href="/dashboard"
              className="h-11 mt-1 rounded-lg bg-[#2B7BC0] text-white text-[14px] font-medium no-underline flex items-center justify-center hover:opacity-90 active:scale-[0.98] transition-[opacity,transform]"
            >
              Continue
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
