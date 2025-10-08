import '@/styles/globals.css';

export const metadata = {
  title: 'Juli Furjes – Cognitive Scientist | UX Research | AI & Frontend Development',
  description: 'Cognitive scientist with expertise in UX research, data science, and AI-driven design. Experienced in developing human-centered digital systems through frontend development, behavioral analysis, and cognitive insights.',
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
      <body>{children}</body>
    </html>
  );
}