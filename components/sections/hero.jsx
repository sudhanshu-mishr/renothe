import Link from 'next/link';
import { ArrowRight, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function HeroSection() {
  return (
    <section className="container-shell py-10 sm:py-16">
      <div className="glass-card overflow-hidden bg-hero-grid p-8 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <Badge>Production-ready circular fashion platform</Badge>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                Buy, sell, and rent second-hand fashion with local discovery built in.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                Renothe helps shoppers find nearby preloved pieces, enables boutiques to monetize rental inventory,
                and gives admins tools to moderate a trusted marketplace.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="#catalog" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark">
                Explore listings
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#seller-tools" className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950">
                Start selling or renting
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/60 bg-white/80 p-4">
                <MapPin className="mb-3 h-5 w-5 text-brand" />
                <p className="font-semibold">Location-aware feed</p>
                <p className="mt-1 text-sm text-slate-600">Nearby listings surfaced first with optional map integrations.</p>
              </div>
              <div className="rounded-2xl border border-white/60 bg-white/80 p-4">
                <ShieldCheck className="mb-3 h-5 w-5 text-brand" />
                <p className="font-semibold">Secure commerce</p>
                <p className="mt-1 text-sm text-slate-600">JWT auth, validation, moderation, and payment-ready flows.</p>
              </div>
              <div className="rounded-2xl border border-white/60 bg-white/80 p-4">
                <Sparkles className="mb-3 h-5 w-5 text-brand" />
                <p className="font-semibold">Rental-first tools</p>
                <p className="mt-1 text-sm text-slate-600">Availability calendars, shop dashboards, and order tracking.</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Women • Occasion wear',
              'Men • Streetwear',
              'Kids • Festive rentals',
              'Vintage • Local pickups'
            ].map((item, index) => (
              <div key={item} className="rounded-[2rem] border border-white/60 bg-white/90 p-6 shadow-soft">
                <p className="text-sm font-medium text-brand">0{index + 1}</p>
                <h3 className="mt-10 text-xl font-semibold text-slate-900">{item}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Smart filters, wishlist support, reviews, and local recommendations all in one polished experience.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
