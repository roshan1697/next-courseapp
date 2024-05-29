'use client'
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from 'next-themes'
const Provider = ({children}:{
    children:React.ReactNode
}) => {
  return (
    <SessionProvider>
                  <ThemeProvider defaultTheme="system">
        {children}
</ThemeProvider>
    </SessionProvider>
  )
}

export default Provider