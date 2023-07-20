"use client";

import React, {createContext, useState, ReactNode} from "react";

interface AuthContextType {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    login: () => {
    },
    logout: () => {
    },
});

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (): void => {
        setIsLoggedIn(true);
    };

    const logout = (): void => {
        setIsLoggedIn(false);
    };

    const authContextValue: AuthContextType = {
        isLoggedIn,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};
