import NextAuth  from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import User from "../../../models/user";
import dbConnect from "../../../utils/dbConnect";

export default NextAuth({
    // Enable JSON Web Tokens since we will not store sessions in our DB
    session: {
        jwt: true
    },
    // add our login CredentialsProvider
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {label: "Email", type: "email"},
                password: {label: "Password", type: "password"}
            },
            authorize: async (credentials) => {
                dbConnect();

                // Try to find the user
                const user = await User.findOne({email: credentials.email}).select('+password')

                if(!user) { 
                    throw new Error('No user with a matching email was found.')
                }

                // Use the comparePassword method we defined in our user.js Model
                const pwValid = await user.comparePassword(credentials.password)

                if(!pwValid){ 
                    throw new Error("Your password is invalid") 
                }

                return user
            }   
        })
    ],
    // user information to be accessible for our app in the token/session
    callbacks: {
        async jwt({token, user}){
            if (user) {
                token.user = {
                    _id: user._id,
                    email: user.email,
                    role: user.role,
                }
            }
            return token
        },
    },  
  pages: {
    // Here you can define your own custom pages for login, recover password, etc.
      signIn: '/login', // we are going to use a custom login page (we'll create this in just a second)
  },
})