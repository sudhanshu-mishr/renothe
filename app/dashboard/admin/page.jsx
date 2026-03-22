import { adminStats, products } from '@/lib/data';

export default function AdminDashboardPage() {
  return (
    <section className="container-shell py-12">
      <div className="space-y-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">Admin panel</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">Marketplace control center</h1>
          <p className="mt-3 max-w-2xl text-slate-600">Monitor platform health, review pending listings, and oversee users, revenue, and moderation workflows.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {adminStats.map((stat) => (
            <div key={stat.label} className="glass-card p-5">
              <p className="text-sm text-slate-500">{stat.label}</p>
              <p className="mt-2 text-3xl font-semibold text-slate-950">{stat.value}</p>
              <p className="mt-1 text-sm text-emerald-600">{stat.change}</p>
            </div>
          ))}
        </div>
        <div className="glass-card overflow-hidden">
          <div className="border-b border-slate-200 px-6 py-4">
            <h2 className="text-lg font-semibold text-slate-950">Listings moderation queue</h2>
          </div>
          <div className="divide-y divide-slate-200">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-slate-900">{product.title}</p>
                  <p className="text-sm text-slate-600">{product.sellerName} • {product.location} • {product.listingMode}</p>
                </div>
                <div className="flex gap-3">
                  <button className="rounded-full border border-emerald-300 px-4 py-2 text-sm font-semibold text-emerald-700">Approve</button>
                  <button className="rounded-full border border-rose-300 px-4 py-2 text-sm font-semibold text-rose-700">Reject</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
