import '@/styles/globals.css';

export const metadata = {
  title: 'Juli Furjes - Portfolio',
  description: 'Cognitive Scientist · UX Research · Frontend · AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}