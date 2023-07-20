"use client";

import React, {JSX, useState} from "react";
import BrandLogo from "@/components/brand/BrandLogo";
import {useRouter} from "next/navigation";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage: React.FC = (): JSX.Element => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Login");
    }
    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-4">
            <BrandLogo />
                <div className="w-full rounded-8">
                    <div className="flex justify-center bg-white rounded-lg p-8 gap-[24px] shadow-lg">
                        <form className="mt-2 w-full"  onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <span className="text-left text-sm font-bold text-gray-900 login-title">Login</span>
                            </div>
                            <input type="hidden" name="remember" value="true" />
                            <div className="rounded-md shadow-sm">
                                <div className="mb-4">
                                    <label htmlFor="username" className="sr-only">Email</label>
                                    <input id="username" name="email" type="text" required className="appearance-none rounded-none relative block w-full px-0 py-2 border-b border-gray-100 placeholder-gray-300 text-gray-500 focus:outline-none focus:ring-amber-950 focus:border-amber-950 focus:z-10 sm:text-sm" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="mb-10">
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <input id="password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-0 py-2 border-b border-gray-100 placeholder-gray-300 text-gray-500 focus:outline-none focus:ring-amber-950 focus:border-amber-950 focus:z-10 sm:text-sm" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                            </div>
                            <div className="mb-4">
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center mt-2 p-4 border border-transparent text-sm font-medium rounded-[8px] text-white bg-primary-dark hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    disabled={isLoading} // Disable the button when isLoading is true
                                >
                                    {isLoading ? "Please wait..." : "Login"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
            />
        </main>
    )
}

export default LoginPage;
