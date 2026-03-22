# Renothe

Renothe is a production-ready starter for a circular fashion marketplace where users can **buy**, **sell**, and **rent** second-hand clothing while shops manage rentable inventory and admins moderate the ecosystem.

## Highlights

- **Single-service deployment** on Render using one Node web service that serves both the Next.js frontend and backend API routes.
- **Next.js App Router** frontend with Tailwind CSS and modular reusable components.
- **JWT authentication** utilities, role-based middleware, and Zod validation.
- **MongoDB + Mongoose** models for users, products, and orders.
- **API routes** for signup, login, products, orders, and health checks.
- **Rental-aware UX** with availability schedules, shop dashboard, and admin moderation preview.
- **Scalable project structure** designed for Stripe, Cloudinary/S3, Google OAuth, live messaging, notifications, and maps.

## Project Structure

```text
app/
  api/
    auth/
    health/
    orders/
    products/
  auth/
  dashboard/
  products/
components/
  sections/
  ui/
lib/
models/
public/
render.yaml
```

## Key Product Modules

- **Guest browsing**: home page, category-led discovery, featured products, and product detail experience.
- **User flows**: authentication pages, buy/rent calls to action, reviews, wishlist-ready cards, and order endpoints.
- **Shop owner flows**: protected dashboard, inventory cards, pricing, and availability management entry points.
- **Admin flows**: moderation queue, marketplace KPIs, and protected dashboard route.

## Single-Service Render Deployment

This repository is configured to run as **one Render web service**:

- **Frontend**: rendered by Next.js.
- **Backend APIs**: served by Next.js route handlers under `app/api/*`.
- **Health checks**: exposed via `/api/health` for Render health monitoring.
- **Deployment config**: checked in through `render.yaml`.
- **Runtime target**: Next.js standalone output for simpler Node hosting.

### Option A: Blueprint deploy on Render

1. Push this repo to GitHub/GitLab.
2. In Render, choose **New +** → **Blueprint**.
3. Select the repository.
4. Render will detect `render.yaml` and create the `renothe-web` service.
5. Fill in the required environment variables:
   - `NEXT_PUBLIC_APP_URL`
   - `MONGODB_URI`
   - `JWT_SECRET`
   - Any optional `CLOUDINARY_*`, `GOOGLE_CLIENT_*`, `STRIPE_*`, and `RESEND_API_KEY` values.
6. Deploy.

### Option B: Manual web service deploy on Render

If you prefer not to use Blueprints, create a single **Web Service** with:

- **Environment**: `Node`
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm run start`
- **Health Check Path**: `/api/health`

## Local Development

1. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000`.

## Environment Variables

See `.env.example` for the supported variables.

### Required

- `MONGODB_URI`: MongoDB connection string.
- `JWT_SECRET`: secret used for signing access tokens.
- `NEXT_PUBLIC_APP_URL`: public base URL for the deployed app.

### Optional integrations

- `CLOUDINARY_*`: Cloudinary credentials for uploads.
- `GOOGLE_CLIENT_*`: Google OAuth support.
- `STRIPE_*`: Stripe checkout configuration.
- `RESEND_API_KEY`: email notification provider.
- `NEXT_PUBLIC_MAPS_KEY`: maps/geolocation provider.

## Production Notes

- `next.config.mjs` uses **standalone output** to make Node hosting on Render cleaner.
- `npm run start` binds to `0.0.0.0` and respects Render's `PORT` environment variable.
- `render.yaml` keeps the app deployable as a **single web service**, not separate frontend/backend services.
- `lib/db.js` now throws a clear error if protected API routes are used without `MONGODB_URI` configured.

## Recommended Next Steps

1. Add a **cart state layer** (Context, Zustand, or Redux Toolkit).
2. Connect **Cloudinary/S3** for product media upload workflows.
3. Add **Stripe/Razorpay** checkout sessions and webhooks.
4. Implement **chat + notifications** using Socket.IO or hosted realtime infrastructure.
5. Persist **reviews, wishlist, coupons, reports, and analytics** in dedicated collections.
6. Add **end-to-end tests** and monitoring before launch.

## Security & Performance Notes

- Passwords are hashed with `bcryptjs`.
- API payloads are validated with `zod`.
- A lightweight in-memory rate limiter is included for authentication endpoints.
- Middleware enforces role-based access for protected routes.
- Remote images are restricted to configured domains in `next.config.mjs`.
- For multi-instance production scaling, replace the in-memory rate limiter with Redis/Upstash.
