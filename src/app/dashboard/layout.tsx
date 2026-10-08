'use client';

import Link from "next/link"
import HeaderComponent from "@/src/components/header.component";
import SidebarComponent from "@/src/components/sideBar.component";

const DashboardPage = () => {
  return (
    <div>
      <SidebarComponent/>
      <div>
          <HeaderComponent />
          <div>
            <p>
              {/* Here is the main content for the dashboard page */}
            </p>
            <Link href="/"> Home</Link>
          </div>
      </div>
    </div>
  );
}

export default DashboardPage; 