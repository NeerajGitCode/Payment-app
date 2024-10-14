"use client";
import { SessionProvider } from "next-auth/react";
export default function authProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
