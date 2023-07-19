import React, {JSX} from "react";
import {SignUpProvider} from "@/lib/hook/SignUpContext";
import Home from "@/app/(pages)/home/page";

const HomePage: React.FC = (): JSX.Element => {
  return (
    <SignUpProvider>
        <Home />
    </SignUpProvider>
  )
}

export default HomePage;
