import React, {JSX} from "react";
import Link from "next/link";
import LoginButton from "@/app/components/auth/SignInButton";


const Header: React.FC = (): JSX.Element => {
    return (
        <main className="fixed w-full z-50">
            <header className="py-4 bg-white sticky top-0 z-50 drop-shadow-lg">
                <nav
                    className="container flex items-center text-sm font-medium tracking-wider uppercase text-stone-500">
                    <ul className="ml-auto flex justify-end items-center  gap-8">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/accounts">Account</Link>
                        </li>
                        <li>
                            <LoginButton/>
                        </li>
                    </ul>
                </nav>
            </header>
        </main>
    )
}

export default Header;
