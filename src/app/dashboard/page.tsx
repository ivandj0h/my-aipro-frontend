"use client";

import React, { JSX } from "react";
import {usePathname} from "next/navigation";
import withAuth from "@/utils/auth/WithAuth";
import LoadingIndicator from "@/components/animation/LoadingIndicator";
import {useUser} from "@/hooks/useUser";

const DashboardPage: React.FC = (): JSX.Element => {
    const pathname = usePathname();
    const page = pathname.replace(/^\/|\/$/g, "").split("/");
    const token = useUser();

    return (
        <main className="pt-20 bg-gray-100 px-8">
            <LoadingIndicator />
        </main>
    )
}

export default withAuth(DashboardPage);
