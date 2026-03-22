export function FooterCta() {
  return (
    <section className="container-shell py-16">
      <div className="glass-card flex flex-col gap-6 bg-slate-950 p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-200">Launch faster</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Ready to scale circular fashion commerce?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Extend the starter with payments, cloud image uploads, Google OAuth, maps, email, and live messaging using the documented integration points.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="/auth/signup" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
            Create account
          </a>
          <a href="/dashboard/shop" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40">
            View shop tools
          </a>
        </div>
      </div>
    </section>
  );
}
