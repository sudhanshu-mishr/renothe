export default function SignupPage() {
  return (
    <section className="container-shell py-16">
      <div className="mx-auto max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">Create account</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Join the circular wardrobe economy</h1>
        <form className="mt-8 space-y-4">
          <label className="block space-y-2 text-sm font-medium text-slate-700">
            <span>Full name</span>
            <input type="text" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-brand transition focus:ring-2" placeholder="Alex Rivera" />
          </label>
          <label className="block space-y-2 text-sm font-medium text-slate-700">
            <span>Email</span>
            <input type="email" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-brand transition focus:ring-2" placeholder="you@example.com" />
          </label>
          <label className="block space-y-2 text-sm font-medium text-slate-700">
            <span>Password</span>
            <input type="password" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-brand transition focus:ring-2" placeholder="Create a secure password" />
          </label>
          <label className="block space-y-2 text-sm font-medium text-slate-700">
            <span>Role</span>
            <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-brand transition focus:ring-2">
              <option>User</option>
              <option>Shop owner</option>
            </select>
          </label>
          <button className="w-full rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white">Create account</button>
        </form>
      </div>
    </section>
  );
}
