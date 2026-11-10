import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Cup2Eat — A little more delicious', description: 'A little more delicious. Discover the signature world of Cup2Eat.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
