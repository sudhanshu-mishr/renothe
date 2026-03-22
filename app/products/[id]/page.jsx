import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { products } from '@/lib/data';
import { formatCurrency } from '@/lib/utils';

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default function ProductDetailsPage({ params }) {
  const product = products.find((item) => item.id === params.id);
  if (!product) notFound();

  const similarProducts = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 2);

  return (
    <section className="container-shell py-12">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <div className="relative h-[32rem] overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
            <Image src={product.images[0]} alt={product.title} fill className="object-cover" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {product.images.map((image) => (
              <div key={image} className="relative h-56 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white">
                <Image src={image} alt={product.title} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="glass-card p-8">
            <div className="flex flex-wrap gap-2">
              <Badge>{product.category}</Badge>
              <Badge className="bg-emerald-100 text-emerald-700">{product.location}</Badge>
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">{product.title}</h1>
            <p className="mt-3 text-base leading-7 text-slate-600">{product.description}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-sm text-slate-500">Buy now</p>
                <p className="mt-2 text-3xl font-semibold text-slate-950">{formatCurrency(product.price)}</p>
              </div>
              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-sm text-slate-500">Rent from</p>
                <p className="mt-2 text-3xl font-semibold text-slate-950">{product.rentPrice ? formatCurrency(product.rentPrice) : 'N/A'}</p>
              </div>
            </div>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              <div><dt className="text-sm text-slate-500">Brand</dt><dd className="font-semibold text-slate-900">{product.brand}</dd></div>
              <div><dt className="text-sm text-slate-500">Condition</dt><dd className="font-semibold text-slate-900">{product.condition}</dd></div>
              <div><dt className="text-sm text-slate-500">Size</dt><dd className="font-semibold text-slate-900">{product.size}</dd></div>
              <div><dt className="text-sm text-slate-500">Seller</dt><dd className="font-semibold text-slate-900">{product.sellerName}</dd></div>
            </dl>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark">Add to buy cart</button>
              <button className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400">Reserve rental</button>
            </div>
          </div>
          <div className="glass-card p-8">
            <h2 className="text-xl font-semibold text-slate-950">Availability calendar</h2>
            <div className="mt-4 space-y-3">
              {product.availability.map((slot) => (
                <div key={`${slot.start}-${slot.end}`} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3">
                  <p className="font-medium text-slate-800">{slot.start} → {slot.end}</p>
                  <Badge className={slot.status === 'available' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}>{slot.status}</Badge>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card p-8">
            <h2 className="text-xl font-semibold text-slate-950">Reviews & ratings</h2>
            <div className="mt-4 space-y-4">
              {product.reviews.map((review) => (
                <div key={review.user} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-slate-900">{review.user}</p>
                    <p className="text-sm text-amber-600">{review.rating} / 5</p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card p-8">
            <h2 className="text-xl font-semibold text-slate-950">Similar products</h2>
            <div className="mt-4 space-y-4">
              {similarProducts.map((item) => (
                <div key={item.id} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="font-semibold text-slate-900">{item.title}</p>
                  <p className="text-sm text-slate-600">{item.location} • {formatCurrency(item.price)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
