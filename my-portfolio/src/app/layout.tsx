import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'Juli Furjes – Tech-to-Human Designer',
  description: 'Designing at the intersection of cognition, UX, and AI. Combining research, data science, and frontend development to create intelligent, inclusive digital experiences.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}