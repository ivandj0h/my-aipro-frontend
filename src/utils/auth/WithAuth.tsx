import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import {AuthContext} from "@/hooks/AuthContext";

const withAuth = (WrappedComponent: React.FC<any>) => {
    return (props: any) => {
        const router = useRouter();
        const authContext = useContext(AuthContext);
        const [isAuthenticated, setIsAuthenticated] = useState(false);

        useEffect(() => {
            const token = Cookies.get("token");
            if (token) {
                setIsAuthenticated(true);
            } else {
                router.replace("/");
            }
        }, []);

        if (!isAuthenticated) {
            return null;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
