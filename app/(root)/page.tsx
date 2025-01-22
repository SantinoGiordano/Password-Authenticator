import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="bg-gray-800 text-white p-8 rounded-lg max-w-lg w-full text-center shadow-lg">
          <p className="text-2xl font-bold mb-6">
            Welcome! Please sign in to your account. If you don't have an account, you can create one below.
          </p>
          <div className="space-y-4">
            <Link
              href="/signIn"
              className="block py-3 text-lg font-semibold text-gray-900 bg-white rounded-md hover:bg-gray-200 transition duration-300"
            >
              Sign In
            </Link>
            <Link
              href="/signUp"
              className="block py-3 text-lg font-semibold text-gray-900 bg-white rounded-md hover:bg-gray-200 transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
