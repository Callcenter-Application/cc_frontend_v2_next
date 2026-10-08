import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1 p-1">
        <h1 className="m-0 text-[26px] font-semibold tracking-[-0.015em] text-[#1F1C1E]">
          Home
        </h1>
        <span className="text-[14px] text-[#6B6560]">
          Welcome to the CallBook overview dashboard
        </span>
      </div>

      <div className="flex-1 bg-white border border-[#E2DDD8] rounded-xl p-5 flex flex-col gap-4 min-w-0">
        <p className="text-[14px] text-[#6B6560]">
          Navigate to user management or check queue analytics.
        </p>
        <div>
          <Link
            href="/dashboard/users"
            className="inline-flex items-center h-10 px-4 rounded-lg bg-[#2B7BC0] text-white text-[14px] font-medium no-underline hover:opacity-90 transition-opacity"
          >
            Go to Users
          </Link>
        </div>
      </div>
    </div>
  );
}
