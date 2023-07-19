import './globals.css'
import React from "react";
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Providers from "@/lib/hook/Providers";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'AI projects App',
    description: 'AI projects Management App',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" data-theme="light">
        <body className={inter.className}>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    )
}
