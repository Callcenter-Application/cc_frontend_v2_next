'use client';

import Link from 'next/link';
import { PhoneIcon } from '@/src/components/common/Icons';

const LandingPage = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-6 bg-[#F0F6FC] font-sans p-4">
      <div className="flex items-center gap-[10px]">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-[#2B7BC0]">
          <PhoneIcon className="w-5 h-5 stroke-white" />
        </div>
        <span className="text-[22px] font-semibold tracking-[-0.01em] text-[#10273D]">
          CallBook
        </span>
      </div>

      <p className="text-[14px] text-[#50677D] max-w-[320px] text-center">
        Manage your call center&apos;s agents, supervisors and queue health in one place.
      </p>

      <nav>
        <Link
          href="/login"
          className="inline-flex items-center h-11 px-6 rounded-lg bg-[#2B7BC0] text-white text-[14px] font-medium no-underline hover:opacity-90 active:scale-[0.98] transition-[opacity,transform]"
        >
          Log in
        </Link>
      </nav>
    </div>
  );
};

export default LandingPage;
