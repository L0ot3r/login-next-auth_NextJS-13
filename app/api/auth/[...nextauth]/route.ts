import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import FacebookProvider from "next-auth/providers/facebook"
import GoogleProvider from "next-auth/providers/google"
import DiscordProvider from "next-auth/providers/discord"


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // ...add providers here
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_APP_ID ?? '',
      clientSecret: process.env.FACEBOOK_APP_SECRET ?? '',
    }), 
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
      authorization: {
        params: {
          access_type: 'offline',
          prompt: 'consent',
          response_type: 'code',
        }
      }
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID ?? '',
      clientSecret: process.env.DISCORD_CLIENT_SECRET ?? '',
    })
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }