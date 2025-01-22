'use client'

import React from "react";

export default function UserNotFound() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 text-white p-8 rounded-lg max-w-lg w-full text-center shadow-xl">
        <p className="text-2xl font-semibold mb-4">
          It seems like you don&apos;t have an account with us yet.
        </p>
        <p className="text-gray-400 mb-6">
          If you&apos;d like to create one, please sign up below!
        </p>
        <a 
          href="/signUp" 
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Sign Up Now
        </a>
      </div>
    </div>
  );
}
