"use client";

import React, {JSX} from "react";
import {signIn, useSession} from "next-auth/react";
import Image from "next/image";

const SignInButton: React.FC = (): JSX.Element => {
    const {data: session} = useSession();


    if (session) {
        return (
            <div className="relative h-8 w-8">
                {session.user?.image ? (
                    <Image
                        src={session.user.image}
                        alt={session.user.name || session.user.email || 'User'}
                        className="inline-block h-8 w-8 rounded-full"
                        layout='fill'
                        objectFit='cover'
                    />

                ) : (
                    <span className="inline-block h-8 w-8 overflow-hidden rounded-full bg-gray-100">
                    <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z'/>
            </svg>
                </span>
                )}
            </div>
        )
    }

    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => signIn()}
        >
            Sign in
        </button>
    )}

    export default SignInButton;
