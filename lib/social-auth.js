import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { postData } from "./post-data";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
      // callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    }),
  ],

  callbacks: {
    async jwt({ token, account, profile }) {
      try {
        if (account && profile) {
          token.accessToken = account.id_token;
          token.id = profile.id;
          token.provider = account.provider;
          token.provider_id = account.providerAccountId;
        }

        return token;
      } catch (error) {
        console.error("Error in jwt function:", error);
        throw error;
      }
    },

    async session({ session, token }) {
      const userInfo = {
        name: token.name,
        email: token.email,
        image: token.picture,
        provider: token.provider,
        provider_id: token.provider_id,
      };
      
      const userData = await postData(
        {
          api: "social-login",
        },
        userInfo
      );

      // Send properties to the client, like an access_token and user id from a provider.
      /*       session.accessToken = token.accessToken;
      session.user.id = token.id; 
      session.uniqueId = token.sub;
      session.provider = token.provider; */

      return userData;
    },
  },
};
