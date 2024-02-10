"use client";

import HomePage from "components/HomePage";
import { AuthProvider } from "utils/useAuthClient";
export default function Page() {
  return (
    <AuthProvider>
      <HomePage />
    </AuthProvider>
  );
}
