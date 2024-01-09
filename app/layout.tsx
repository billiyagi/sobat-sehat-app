import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import { Analytics } from '@vercel/analytics/react';
/**
 * Metadata default for the page.
*/
export const metadata: Metadata = {
    title: 'Sobat Sehat',
    description: 'Hidup Sehat, Hidup Bahagia',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
        <html lang='en'>
            <body>
                <Providers>{children}</Providers>
                <Analytics />
            </body>
        </html>
    )
}
