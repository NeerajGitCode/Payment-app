"use client"; // This must be at the top of the file

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Correct import for app directory

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // Correct usage in app directory
  const { data: session, status } = useSession(); // Get session data and status

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/"); // Redirect to home if authenticated
    }
  }, [status, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, // Prevents redirecting on error
    });

    if (result.error) {
      setError("Invalid email/password");
    } else {
      router.push("/"); // Redirect on successful login
    }
  };

  // Only render the login form if the user is not authenticated
  if (status === "loading") {
    return <p>Loading...</p>; // Optionally, you can display a loading spinner
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Welcome Back
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}{" "}
        {/* Display error if present */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              required
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              required
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Login
          </button>
        </form>
        <div className="flex items-center justify-between">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-600">Or</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <div className="flex flex-col space-y-3">
          <button className="flex items-center justify-center w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none">
            <i className="fab fa-facebook-f"></i> &nbsp; Login with Facebook
          </button>
          <button
            onClick={() => signIn("google")}
            className="flex items-center justify-center w-full px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none">
            <i className="fab fa-google"></i> &nbsp; Login with Google
          </button>
          <button
            onClick={() => signIn("github")}
            className="flex items-center justify-center w-full px-4 py-2 text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:outline-none">
            <i className="fab fa-github"></i> &nbsp; Login with Github
          </button>
        </div>
        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link
            href="/CreateAccount"
            className="font-semibold text-blue-600 hover:text-blue-800">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
