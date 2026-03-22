import { BellRing, CalendarDays, CreditCard, Heart, LocateFixed, MessagesSquare } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';

const capabilities = [
  {
    title: 'Wishlist + saved looks',
    description: 'Save items, compare across sizes and sellers, and move favourites into the correct buy or rent flow.',
    icon: Heart
  },
  {
    title: 'Rental calendars',
    description: 'Availability windows are modelled to support reservations, returns, cleaning buffers, and maintenance blocks.',
    icon: CalendarDays
  },
  {
    title: 'Checkout orchestration',
    description: 'Integrate Stripe or Razorpay for one-time purchases, deposits, rental totals, and coupon-aware summaries.',
    icon: CreditCard
  },
  {
    title: 'Buyer-seller messaging',
    description: 'Conversation threads can be upgraded to WebSockets, Pusher, Ably, or polling without changing the UX layout.',
    icon: MessagesSquare
  },
  {
    title: 'Real-time notifications',
    description: 'Trigger order updates, rental reminders, moderation alerts, and low-inventory messages.',
    icon: BellRing
  },
  {
    title: 'Nearby discovery',
    description: 'Blend browser geolocation, IP lookup, and optional maps so local listings surface before long-distance ones.',
    icon: LocateFixed
  }
];

export function ExperienceGridSection() {
  return (
    <section id="rentals" className="container-shell py-16">
      <div className="space-y-10">
        <SectionHeading
          eyebrow="Commerce journeys"
          title="Everything needed for discovery, checkout, rentals, messaging, and retention"
          description="The UI is organized around the real marketplace workflows your users expect, from saved items and search to payment, delivery, rental returns, and notifications."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map(({ title, description, icon: Icon }) => (
            <div key={title} className="glass-card p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Icon className="h-5 w-5" />
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
