import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cup2Eat — Eat Your Drink | Edible Cups',
  description: 'Not just a cup. It is an experience. Explore Cup2Eat edible cups for chai, coffee, ice cream and desserts. Bulk enquiries for cafes, restaurants and events.',
  openGraph: {
    title: 'Cup2Eat — Eat Your Drink',
    description: 'Edible cups. Real flavours. A different kind of serving experience.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
