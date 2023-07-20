import '../globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from "react";
import {Constants} from "@/enums/Constants";
import {AuthProvider} from "@/hooks/AuthContext";
import NavBar from "@/components/Navigation/NavBar";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: Constants.APP_NAME,
    description: Constants.BRAND_NAME,
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" className={inter.className}>
        <body className="custom-scrollbar">
        <AuthProvider>
            <NavBar />
            {children}
        </AuthProvider>
        </body>
        </html>
    )
}
