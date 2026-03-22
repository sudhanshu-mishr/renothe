import { shopStats, products } from '@/lib/data';
import { formatCurrency } from '@/lib/utils';

export default function ShopDashboardPage() {
  return (
    <section className="container-shell py-12">
      <div className="space-y-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">Shop dashboard</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">Rental inventory and fulfillment operations</h1>
          <p className="mt-3 max-w-2xl text-slate-600">Manage pricing, availability windows, order statuses, and utilization for rentable clothes.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {shopStats.map((stat) => (
            <div key={stat.label} className="glass-card p-5">
              <p className="text-sm text-slate-500">{stat.label}</p>
              <p className="mt-2 text-3xl font-semibold text-slate-950">{stat.value}</p>
              <p className="mt-1 text-sm text-emerald-600">{stat.change}</p>
            </div>
          ))}
        </div>
        <div className="glass-card overflow-hidden">
          <div className="border-b border-slate-200 px-6 py-4">
            <h2 className="text-lg font-semibold text-slate-950">Active rentable listings</h2>
          </div>
          <div className="divide-y divide-slate-200">
            {products.filter((product) => product.listingMode !== 'sale').map((product) => (
              <div key={product.id} className="grid gap-4 px-6 py-5 lg:grid-cols-[1fr_auto_auto] lg:items-center">
                <div>
                  <p className="font-semibold text-slate-900">{product.title}</p>
                  <p className="text-sm text-slate-600">{product.location} • {product.brand} • {product.size}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Rental price</p>
                  <p className="font-semibold text-slate-900">{product.rentPrice ? formatCurrency(product.rentPrice) : 'N/A'}</p>
                </div>
                <button className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700">Manage calendar</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
