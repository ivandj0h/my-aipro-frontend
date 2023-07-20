"use client";

import React, { useEffect, JSX } from 'react';
import { useRouter } from 'next/navigation';
import LoadingIndicator from '@/components/animation/LoadingIndicator';

const RedirectPage: React.FC = (): JSX.Element  => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/');
        }, 1000); // Set delay sesuai yang diinginkan

        return () => {
            clearTimeout(timer);
        };
    }, [router]);

    return <LoadingIndicator />;
};

export default RedirectPage;
