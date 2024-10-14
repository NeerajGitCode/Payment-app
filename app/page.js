"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const handleSignIn = () => {
    router.push("/login");
  };
  const handleSignOut = () => {
    signOut();
  };
  return (
    <>
      {status !== "authenticated" ? (
        <>
          <div className="flex flex-col p-2 items-center">
            <p className="text-5xl font-semibold">
              Please Login Or signup first ,{" "}
              <button onClick={handleSignIn}>Sign in</button>
            </p>
          </div>
        </> // Show nothing if not authenticated
      ) : (
        // Show content if authenticated
        <div className="">
          <div className="min-h-[40vh] flex flex-col items-center justify-center gap-2">
            <div className="flex flex-col p-2 items-center">
              <p className="text-5xl font-semibold">
                Welcome , {session.user.name}
              </p>
              <span className="text-xl font-bold">
                Profile ,{session.user.email}
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleSignOut}
                className="flex items-center justify-center w-full px-4 py-2 text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:outline-none">
                Sign out
              </button>
            </div>
          </div>
          <div className="border-t border-gray-600 w-full"></div>
        </div>
      )}
    </>
  );
}
