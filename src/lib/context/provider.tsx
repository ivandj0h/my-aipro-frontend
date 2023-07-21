"use client";

import {SessionProvider} from "next-auth/react";
import {ProviderProps} from "@/lib/interfaces";

const Provider = ({ children }: ProviderProps) => {
    return <SessionProvider>{children}</SessionProvider>
}

export default Provider;
