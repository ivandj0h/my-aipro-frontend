import React, {JSX} from "react";
import LoginComponent from "@/components/LoginComponent"

const LoginPage: React.FC = (): JSX.Element => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <LoginComponent />
        </main>
    )
}

export default LoginPage;
