"use client";

import React, { JSX } from "react";
import LoginPage from "@/app/login/page";

const HomePage: React.FC = (): JSX.Element => {
  return (
    <main className="relative items-center justify-center min-h-screen overflow-hidden">
        <LoginPage  />
    </main>
  )
}

export default HomePage;
