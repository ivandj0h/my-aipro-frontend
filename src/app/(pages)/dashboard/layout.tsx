import React from "react";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBarComponent from "@/components/layouts/NavBar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'AI projects App - Dashboard',
    description: 'AI projects Management App',
}

export default function DashboardLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
            <NavBarComponent />
            {children}
        </body>
        </html>
    )
}
