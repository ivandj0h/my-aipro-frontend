"use client";

import {useContext} from "react";
import SignUpPage from "@/app/(auth)/signUp/page";
import LoginPage from "@/app/(auth)/signin/page";
import {SignUpContext} from "@/lib/hook/SignUpContext";


export default function Home() {
    const { showSignUp } = useContext(SignUpContext);

    return (
        <main className="flex items-center justify-center min-h-screen overflow-hidden">
            {showSignUp ? <SignUpPage/> : <LoginPage/>}
        </main>

    )
}
