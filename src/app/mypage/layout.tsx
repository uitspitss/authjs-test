import '@/app/globals.css';
import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';

export const metadata: Metadata = {
  title: 'Prisma Auth Demo',
  description: 'Prisma and Next Auth App with Next.js',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}
