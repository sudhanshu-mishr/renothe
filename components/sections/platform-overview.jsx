import { MessageCircleMore, Shield, Store, Truck, WandSparkles } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';

const features = [
  {
    title: 'Role-based journeys',
    description: 'Guests browse, users shop or sell, shop owners manage rentable inventory, and admins moderate the marketplace.',
    icon: Shield
  },
  {
    title: 'Checkout + fulfillment',
    description: 'Separate buy/rent cart logic, address management, Stripe-ready payments, and rental lifecycle tracking.',
    icon: Truck
  },
  {
    title: 'Messaging + notifications',
    description: 'Buyer-seller chat, operational alerts, real-time polling or WebSocket upgrades, and email notification hooks.',
    icon: MessageCircleMore
  },
  {
    title: 'Shop operations',
    description: 'Inventory dashboards, utilization analytics, pricing control, and availability calendar management.',
    icon: Store
  },
  {
    title: 'Smart recommendations',
    description: 'Trending inventory, local prioritization, and optional AI-based recommendation pipelines for personalization.',
    icon: WandSparkles
  }
];

export function PlatformOverviewSection() {
  return (
    <section className="container-shell py-16">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="Platform architecture"
          title="A scalable blueprint designed for commerce, rentals, moderation, and growth"
          description="This starter ships with reusable UI, API routes, Mongoose models, JWT authentication utilities, rate limiting, and documentation so your team can extend it safely."
        />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <div key={title} className="glass-card p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
