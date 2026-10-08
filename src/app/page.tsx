'use client';

import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <nav>
        <Link href="/login">login</Link>
      </nav>
    </div>
  );
}


export default LandingPage;
