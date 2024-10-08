"use client"
import AuthContext from '@/contexts/authContext';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const { signed } = useContext(AuthContext)
    const router = useRouter()

    useEffect(() => {
        if (!signed) {
            router.push('/auth/login')
        }
    }, [signed, router])

    return (
        <div className='flex flex-col h-screen w-screen'>
            <Header />
            <div className='flex-grow'>
                {children}
            </div>
            <Footer />
        </div>
    )
}