import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-4 h-full min-h-0">
      <div className="flex flex-col gap-1 p-1">
        <h1 className="m-0 text-[26px] font-semibold tracking-[-0.015em] text-[#10273D]">
          Home
        </h1>
        <span className="text-[14px] text-[#50677D]">
          Welcome to the CallBook overview dashboard
        </span>
      </div>

      <div className="flex-1 min-h-0 bg-white border border-[#D6E4F0] rounded-xl p-5 flex flex-col gap-4 min-w-0">
        <p className="text-[14px] text-[#50677D]">
          Navigate to user management or check queue analytics.
        </p>
        <div>
          <Link
            href="/dashboard/users"
            className="inline-flex items-center h-10 px-4 rounded-lg bg-[#2B7BC0] text-white text-[14px] font-medium no-underline hover:opacity-90 active:scale-[0.98] transition-[opacity,transform]"
          >
            Go to Users
          </Link>
        </div>
      </div>
    </div>
  );
}
