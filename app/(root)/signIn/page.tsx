'use client'

import Link from "next/link";

export default function SignIn() {
  const Admin = false; 

  const linkHref = Admin ? '/userLandingPage' : '/';



  return (
    <Link href={linkHref}>
      <p>Sign In</p>
    </Link>
  );
}
