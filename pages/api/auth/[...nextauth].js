import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByName, addUser } from "../../../user-service";
import { log } from "logging-service";
const bcrypt = require("bcrypt");

export const authOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await getUserByName(credentials.username);
        if (user && (await bcrypt.compare(credentials.password, user.password))) {
          log(`Succesful login with user '${user.username}'`);
          return {
            name: user.username,
          };
        }
        log(`Failed login with user '${credentials.username}'`);
        return null;
      },
    }),
  ],
  debug: true,
};
export default NextAuth(authOptions);
