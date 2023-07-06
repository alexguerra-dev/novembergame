import './globals.css'

export const metadata = {
    title: 'November Game',
    description: 'The best game in the world.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
