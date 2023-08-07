import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '@/app/utils/libs/prismadb'
import bcrypt from 'bcrypt';

//For login
export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),

    providers: [
        CredentialsProvider({
            name: 'credentials',

            // Get email and password from form
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },

            //To authorize a user when logging in
            async authorize(credentials) {

                //If no email or password is provided
                if (!credentials?.email || !credentials?.password)
                    throw new Error('Invalid credentials');

                //Find user by unique email
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                //If no user or no password 
                if (!user || !user?.hashedPassword)
                    throw new Error('Invalid credentials');

                //Check password
                const isValid = await bcrypt.compare(credentials.password, user.hashedPassword);

                if (!isValid)
                    throw new Error('Invalid credentials');

                return user;
            }
        })
    ],
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };