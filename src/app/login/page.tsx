import Link from "next/link";

const LoginPage = () => {
  return (
    <div>
      <p>This is the login page</p>
      <Link href="/dashboard">Go to Dashboard</Link>
    </div>
  );
}

export default LoginPage;