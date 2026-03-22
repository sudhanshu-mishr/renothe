import Link from 'next/link';
import { Search, ShoppingBag } from 'lucide-react';

const navItems = [
  { label: 'Browse', href: '#catalog' },
  { label: 'Rent', href: '#rentals' },
  { label: 'Sell', href: '#seller-tools' },
  { label: 'Shops', href: '#shops' },
  { label: 'Admin', href: '/dashboard/admin' }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-slate-50/90 backdrop-blur">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-lg font-bold text-white">R</div>
          <div>
            <p className="text-lg font-semibold tracking-tight">Renothe</p>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Rewear · Rent · Resell</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 md:flex md:items-center md:gap-2">
            <Search className="h-4 w-4" />
            Search
          </button>
          <Link href="/auth/login" className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">
            Sign in
          </Link>
          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700">
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
