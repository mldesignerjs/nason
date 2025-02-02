import type { Metadata } from 'next'

import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

import './globals.css'

export const metadata: Metadata = {
    title: {
        template: '%s | Ô dù Nason',
        default: "Ô dù Nason - Khắc tên lên tay cầm",
    },
    description: "I'm a designer!",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="bg-gray-200">
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
