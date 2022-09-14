require("dotenv").config();

module.exports = {
  reactStrictMode: true,
  env: {
    apiURL: process.env.apiURL,
    GOOGLE_CLIENT_ID : process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET : process.env.GOOGLE_CLIENT_SECRET,
    
    FACBOOK_CLIENT_ID : process.env.FACBOOK_CLIENT_ID,
    FACEBOOK_CLIENT_SECRET : process.env.FACEBOOK_CLIENT_SECRET,

    LINKEDIN_CLIENT_ID: process.env.LINKEDIN_CLIENT_ID,
    LINKEDIN_CLIENT_SECRET: process.env.LINKEDIN_CLIENT_SECRET,

    TWITTER_CLIENT_ID : process.env.TWITTER_CLIENT_ID,
    TWITTER_CLIENT_SECRET : process.env.TWITTER_CLIENT_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  }
}
