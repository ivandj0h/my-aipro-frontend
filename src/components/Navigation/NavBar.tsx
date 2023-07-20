"use client"

// @client
import React, {useContext, useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import Cookies from "js-cookie";
import {AuthContext} from "@/hooks/AuthContext";
import {useRouter} from "next/navigation";
import BrandLogo from "@/components/brand/BrandLogo";
const NavBar = () => {
    const router = useRouter();
    const authContext = useContext(AuthContext);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLogout = () => {
        authContext.logout();
        Cookies.remove('token');
        router.push("/");
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };

        if (dropdownOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [dropdownOpen]);


    return (
        <div className="fixed top-0 z-50 w-full bg-white shadow-md p-4">
            <div className="flex items-center justify-between">
                <Link href={"/dashboard"}>
                    <BrandLogo/>
                </Link>
                <div className="relative" ref={dropdownRef}>
                    <button onClick={() => setDropdownOpen(!dropdownOpen)} className="relative z-50">
                        <img src="https://i.pinimg.com/474x/ed/bb/86/edbb862f392b3efe2efd854aca098bf1.jpg" alt="user avatar" className="rounded-full h-10 w-10" />
                    </button>
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={() => router.push('/dashboard')}>Dashboard</p>
                                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={() => router.push('/visual')}>Visual</p>
                                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={() => router.push('/report')}>Reports</p>
                                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={() => router.push('/manage')}>Manage Data</p>
                                <hr className="my-2"/>
                                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={() => router.push('/account')}>Account</p>
                                    <button onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Logout</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NavBar;
