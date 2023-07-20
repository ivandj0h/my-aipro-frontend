"use client"

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

export function useUser() {
    const router = useRouter();
    const token = Cookies.get('token');

    useEffect(() => {
        if (!token) {
            router.push('/');
        }
    }, [router, token]);

    return token;
}
