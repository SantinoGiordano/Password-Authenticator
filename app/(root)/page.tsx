import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-green-300 p-6 rounded-lg max-w-lg w-full text-center">
          <p className="text-2xl font-bold mb-4">
            Hello and welcome, please sign in to an account. If you don&apos;t
            have an account already, feel free to create one.
          </p>
          <p className="text-xl font-medium">
            <Link
              href="/signIn"
              className="p-3 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Sign In
            </Link>

            <Link
              href="/signUp"
              className="p-3 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
