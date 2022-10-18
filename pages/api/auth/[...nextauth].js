// import NextAuth from "next-auth"
// import GoogleProvider from "next-auth/providers/google"
// import FacebookProvider from "next-auth/providers/facebook"
// import LinkedinProvider from "next-auth/providers/linkedin";
// import TwitterProvider from "next-auth/providers/twitter";
// import authService from "../../../services/auth.service";

// export const authOptions = {
//     // Configure one or more authentication providers
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         }),
//         FacebookProvider({
//             clientId: process.env.FACEBOOK_CLIENT_ID,
//             clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
//         }),
//         LinkedinProvider({
//             clientId: process.env.LINKEDIN_CLIENT_ID,
//             clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
//         }),
//         TwitterProvider({
//             clientId: process.env.TWITTER_CLIENT_ID,
//             clientSecret: process.env.TWITTER_CLIENT_SECRET,
//             version: "2.0",
//         })
//     ],
//     // The secret should be set to a reasonably long random string.
//     // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
//     // a seperate secret is defined explicitly for encrypting the JWT.
//     secret: process.env.SECRET,
//     pages: {
//         signIn: "/",
//         signOut: "/auth/signout",
//         error: "/auth/error", // Error code passed in query string as ?error=
//         verifyRequest: "/auth/verify-request", // (used for check email message)
//         newUser: "/auth/new-user", // If set, new users will be directed here on first sign in
//     },
//     callbacks: {
//         async signIn({ user, account, profile }) {
//             if (user) {
//                 return true;
//             }
//             return false;
//         },
//         async jwt({token, account, profile, isNewUser}) {
//             if(account) {
//                 token.access_token = account.access_token;
//                 token.id = profile.id
//                 token.provider = account.provider
//             }
//             return token;
//         },
//         async session({ session, token, user }) {
//             // Send properties to the client, like an access_token and user id from a provider.
//             session.access_token = token.access_token
//             session.user.id = token.id
//             session.user.provider = token.provider
//             return session;
//         }
//     },
//     theme: "auto",
// }
// export default NextAuth(authOptions);
