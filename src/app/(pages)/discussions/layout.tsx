import ToasterContext from '@/app/utils/context/ToasterContext'
import AuthContext from '@/app/utils/context/AuthContext'
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