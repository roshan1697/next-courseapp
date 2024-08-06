import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const NEXT_AUTH = 
    {
        providers: [
            // CredentialsProvider({
            //     name: "Credentials",
            //     credentials: {
            //         username: { label: "Email", type: "text", placeholder: "Email" },
            //         password: { label: "Password", type: "password", placeholder: 'password' }
            //     },
            //     async authorize(credentials) {
                
    
                    
            //         console.log(credentials)
            //         const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
            //         if(user){
            //             return user
            //         }else {
            //             return null
            //         }
                
                    
            //     },
                
            // }),
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID || '',
                clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
            }),
            GitHubProvider({
                clientId: process.env.GITHUB_ID || '',
                clientSecret: process.env.GITHUB_SECRET || ''
            }),
        ],
        
        secret: process.env.NEXTAUTH_SECRET,
        callbacks: {
            session: ({session,token,user}:any)=>{
                if (session && session.user){
                    session.user.id = token.sub
                    
                
                }
                
    
                return session
    
            
                
    
            }
        }
    }
