import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Provider from "@/lib/context/provider";
import Header from "@/app/(site)/header";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'AIProject Management',
    description: 'AIProject Management Application',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="h-full scroll-smooth antialiased">
        <body className="inter.className flex h-full flex-col">
        <Provider>
            <Header />
          <main className="grow">{children}</main>
        </Provider>
        </body>
        </html>
    )
}
