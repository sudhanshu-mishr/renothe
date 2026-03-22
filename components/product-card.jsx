import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-80 overflow-hidden">
        <Image src={product.images[0]} alt={product.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
        <button className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-slate-800 shadow-sm transition hover:bg-white">
          <Heart className="h-4 w-4" />
        </button>
        <div className="absolute left-4 top-4 flex gap-2">
          <Badge>{product.listingMode === 'hybrid' ? 'Buy + Rent' : product.listingMode === 'rent' ? 'For Rent' : 'For Sale'}</Badge>
          {product.trending ? <Badge className="bg-amber-100 text-amber-700">Trending</Badge> : null}
        </div>
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500">{product.category} • {product.location}</p>
            <h3 className="mt-1 text-xl font-semibold text-slate-900">
              <Link href={`/products/${product.id}`}>{product.title}</Link>
            </h3>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            {product.rating}
          </div>
        </div>
        <p className="text-sm leading-6 text-slate-600">{product.description}</p>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-lg font-semibold text-slate-950">{formatCurrency(product.price)}</p>
            {product.rentPrice ? <p className="text-sm text-slate-500">or {formatCurrency(product.rentPrice)} / 4 days</p> : null}
          </div>
          <Link href={`/products/${product.id}`} className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950">
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}
