import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ToasterContext from './context/ToasterContext'
import AuthContext from './context/AuthContext'
import NavBar from './components/NavBar/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movie tracker',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <AuthContext>
          <ToasterContext />
          <div className='h-full bg-primary'>
            <NavBar>
              <div className='h-screen pt-20'>
                {children}
              </div>
            </NavBar>
          </div>
        </AuthContext>

      </body>
    </html>
  )
}
