export default function LoginPage() {
  return (
    <section className="container-shell py-16">
      <div className="mx-auto max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">Welcome back</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Sign in to Renothe</h1>
        <form className="mt-8 space-y-4">
          <label className="block space-y-2 text-sm font-medium text-slate-700">
            <span>Email</span>
            <input type="email" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-brand transition focus:ring-2" placeholder="you@example.com" />
          </label>
          <label className="block space-y-2 text-sm font-medium text-slate-700">
            <span>Password</span>
            <input type="password" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-brand transition focus:ring-2" placeholder="••••••••" />
          </label>
          <button className="w-full rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white">Sign in</button>
          <button type="button" className="w-full rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700">Continue with Google</button>
        </form>
      </div>
    </section>
  );
}
