"use client";


import React, {JSX, useRef, useState} from "react";
import { signOut, useSession } from "next-auth/react";
import {FaFileAlt, FaMoneyBillWave, FaSignOutAlt, FaUser} from "react-icons/fa";
import Link from "next/link";
import {RiDashboardLine} from "react-icons/ri";

const NavBarComponent: React.FC = (): JSX.Element => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div ref={ref}  className="fixed top-0 z-50 w-full flex gap-4 p-2 shadow-lg border-gray-150">
            <h3 className="font-black text-lg text-center ml-10">AI Project App</h3>
            <div className="relative ml-auto mr-10">
                <div className="flex items-center">
                    <p className="text-black mr-4">Login As:</p>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <FaUser className="h-8 w-8 rounded-full border-2 border-gray-600" />
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="absolute right-0 mt-12 py-4 w-48 bg-transparent rounded-md shadow-xl z-20">
                    <Link onClick={() => setIsOpen(false)} href="/dashboard" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-200 hover:text-gray-600">
                        <div className="flex items-center justify-start">
                            <RiDashboardLine className="h-6 w-6 rounded-full border-2 border-gray-600 mr-2" />
                            <span>Dashboard</span>
                        </div>
                    </Link>
                    <Link onClick={() => setIsOpen(false)} href="/item" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-200 hover:text-gray-600">
                        <div className="flex items-center justify-start">
                            <FaFileAlt className="h-6 w-6 rounded-full border-2 border-gray-600 mr-2" />
                            <span>Data Item</span>
                        </div>
                    </Link>
                    <Link onClick={() => setIsOpen(false)} href="/deposit" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-200 hover:text-gray-600">
                        <div className="flex items-center justify-start">
                            <FaMoneyBillWave className="h-6 w-6 rounded-full border-2 border-gray-600 mr-2" />
                            <span>Deposit</span>
                        </div>
                    </Link>
                    <a onClick={() => { signOut(); setIsOpen(false); }} className="cursor-pointer block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-200 hover:text-gray-600 border-t-2 border-gray-200">
                        <div className="flex items-center justify-start">
                            <FaSignOutAlt className="h-6 w-6 rounded-full border-2 border-gray-600 mr-2" />
                            <span>Logout</span>
                        </div>
                    </a>
                </div>
            )}
        </div>
    )
}

export default NavBarComponent;
