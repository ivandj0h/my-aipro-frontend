import React from "react";
import TextField from "@/app/components/form/TextField";
import Button from "@/app/components/ui/button";


const SignInPage: React.FC = (): JSX.Element => {
    return (
        <>
            <form>
                <div className="space-y-2">
                    <TextField
                        id="email"
                        name="email"
                        type="email"
                        label="Sign in with your email"
                        placeholder="admin@admin.com"
                        autoComplete="email"
                        required
                    />
                </div>
                <Button
                    variant="outline"
                    type="submit"
                    className="mt-3 w-full"
                    color="gray"
                >
                    Continue with email
                </Button>
            </form>
        </>
    )
}

export default SignInPage;
