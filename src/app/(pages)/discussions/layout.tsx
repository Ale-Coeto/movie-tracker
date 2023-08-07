import { Inter } from 'next/font/google'
import ToasterContext from '@/app/context/ToasterContext'
import AuthContext from '@/app/context/AuthContext'
import NavBar from '@/app/components/NavBar/NavBar'
import Sidebar from './components/Sidebar/Sidebar'




export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (

        <AuthContext>
            <ToasterContext />
            <div className='h-screen bg-primary'>
                <Sidebar>
                    <div className='mt-0 w-full'>
                        {children}
                    </div>
                </Sidebar>
            </div>
        </AuthContext>

    )
}