import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import LinkedinProvider from "next-auth/providers/linkedin";
import TwitterProvider from "next-auth/providers/twitter";
import CredentialProvider from "next-auth/providers/credentials";
import authService from "../../../services/auth.service";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        FacebookProvider({
            clientId: process.env.FACBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        LinkedinProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET
        }),
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID,
            clientSecret: process.env.TWITTER_CLIENT_SECRET,
            version: "2.0"
        }),
        CredentialProvider({
            name: 'Credientials',

            async authorize(credentials, { body }) {
                // Add logic here to look up the user from the credentials supplied
                const { username, password } = body;
                if (credentials && username && password) {
                    // Any object returned will be saved in `user` property of the JWT
                    const result = await authService.login(username, password);
                    const user = { refreshToken: result.refresh, accessToken: result.access }
                    return user;
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null
                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        })
    ],
    pages: {
        signIn: '/',
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (user) {
                return user;
            } else {
                return '/';
            }
        },
        async jwt(token, user) {
            if (user) {
                token = { accessToken: user.accessToken }
            }
            return token;
        },
        async session({ session, token, user }) {
            session.accessToken = token.accessToken;
            // session.user = user;
            return session;
        }
    }
}

export default NextAuth(authOptions)