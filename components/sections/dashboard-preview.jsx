import { adminStats, shopStats } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';

function StatGrid({ title, items }) {
  return (
    <div className="glass-card p-6">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Live preview</span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="mt-2 text-3xl font-semibold text-slate-950">{item.value}</p>
            <p className="mt-1 text-sm text-emerald-600">{item.change}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DashboardPreviewSection() {
  return (
    <section id="seller-tools" className="container-shell space-y-10 py-16">
      <SectionHeading
        eyebrow="Operations"
        title="Admin and shop dashboards ready for moderation, inventory, and rental management"
        description="Preview the kinds of metrics and control centers wired into the app shell. Protected dashboard routes are included for both admins and shop owners."
      />
      <div className="grid gap-6 xl:grid-cols-2">
        <StatGrid title="Admin cockpit" items={adminStats} />
        <StatGrid title="Shop dashboard" items={shopStats} />
      </div>
    </section>
  );
}
