import '@/app/globals.css';
import { Header } from '@/components/header';

export const metadata = {
  title: 'Renothe | Buy, sell & rent second-hand fashion',
  description:
    'Production-ready circular fashion marketplace starter built with Next.js, Tailwind CSS, Mongoose, and JWT authentication.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
