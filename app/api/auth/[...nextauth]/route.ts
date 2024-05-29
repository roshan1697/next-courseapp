import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";



const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Email", type: "text", placeholder: "Email" },
                password: { label: "Password", type: "password" , placeholder: 'password'}
              },
              async authorize(credentials,req){
                const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
                if(user){
                    return user
                }else {
                    return null
                }
              }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
})

export const GET = handler
export const POST = handler