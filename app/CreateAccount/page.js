"use client";
import axios from "axios";
import { useRouter } from "next/navigation"; // Correct import for app directory
import { useState } from "react";

export default function CreateAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // Correct usage in app directory

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if password matches confirmPassword
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Proceed if no error
    setError(""); // Clear error if everything is fine
    console.log("Account created successfully");

    try {
      const response = await axios.post("/api/user", {
        name,
        email,
        password,
      });
      router.push("/"); // Redirect to home on success
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError("This email is already in use. Try another.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Create an Account
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                required
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="John Doe"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
              {error && error !== "Passwords do not match" ? (
                <p className="text-red-500 ml-3 my-1 font-medium text-sm">
                  {error}
                </p>
              ) : null}
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
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                required
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="********"
                onChange={(e) => setConfirmPassword(e.target.value)} // Update confirm password state
              />
            </div>
            {error === "Passwords do not match" ? (
              <p className="text-red-500 ml-3 my-1 font-medium text-sm">
                Passwords do not match
              </p>
            ) : null}
            <button
              type="submit"
              className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
