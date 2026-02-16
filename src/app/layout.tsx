import { Providers } from './providers';
import '@/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Turk3cell - AI-Powered Technology Team',
    description: 'Multidisciplinary engineering team building AI-powered decision systems, data analytics, and intelligent automation solutions.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="tr">
            <body>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
