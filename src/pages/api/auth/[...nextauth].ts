import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import prisma from "@/lib/prisma";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";

const auth = async (req: NextApiRequest, res: NextApiResponse) => {
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
        throw new Error("Google OAuth credentials are missing");
    }

    return await NextAuth(req, res, {
        providers: [
            GoogleProvider({
                clientId,
                clientSecret
            })
        ],
        pages: {
            signIn: '/signin',
        },
        adapter: PrismaAdapter(prisma),
        session: {
            strategy: 'jwt',
        }
    })
}

export default auth;
