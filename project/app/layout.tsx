import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SalesDash - Interactive Sales Dashboard',
  description: 'A modern sales dashboard built with Next.js 15, TypeScript, and Tailwind CSS. Features multiple chart types, advanced filtering, and responsive design.',
  keywords: 'sales, dashboard, analytics, charts, next.js, typescript, tailwind',
  authors: [{ name: 'SalesDash Team' }],
  openGraph: {
    title: 'SalesDash - Interactive Sales Dashboard',
    description: 'Visualize your sales data with multiple chart types and advanced filtering capabilities.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}