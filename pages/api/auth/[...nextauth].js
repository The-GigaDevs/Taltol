import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import LinkedinProvider from "next-auth/providers/linkedin";
import TwitterProvider from "next-auth/providers/twitter";
import CredentialProvider from "next-auth/providers/credentials";
import authService from "../../../services/auth.service";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),
        LinkedinProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
        }),
        TwitterProvider({
            clientId: process.env.TWITTER_ID,
            clientSecret: process.env.TWITTER_SECRET,
        }),
        CredentialProvider({
            name: "Credentials",
            
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
        }),
    ],
    // The secret should be set to a reasonably long random string.
    // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
    // a seperate secret is defined explicitly for encrypting the JWT.
    secret: process.env.SECRET,
    
    pages: {
        signIn: "/",
        signOut: "/auth/signout",
        error: "/auth/error", // Error code passed in query string as ?error=
        verifyRequest: "/auth/verify-request", // (used for check email message)
        newUser: "/auth/new-user", // If set, new users will be directed here on first sign in
    },
    callbacks: {
        async signIn(user, account, profile) {
            //check if user is verified
            if (user) 
            return true;
        },
        async redirect(url, baseUrl) {
            return baseUrl;
        },
        async session(session, user) {
            session.user = user;
            return session;
        },
        async jwt(token, user, account, profile, isNewUser) {
            return token;
        }        
    },
    events: {},
    theme: "auto",
    debug: false,
})