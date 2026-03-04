# NEST Tourism – Wayanad

Premium tourism website for **The NEST** (North Wayanad Environmental Sustainable Tourism Development Co Operative Society Ltd No.W-361). Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, GSAP, and Three.js.

## Features

- **Public site**: Home, About, Experiences, Contact with immersive hero (Three.js), animations (Framer Motion), and responsive layout
- **Experiences catalog**: Trekking, Wildlife Safari, Waterfalls, Village Culture, Forest Camping, Adventure – with booking form
- **Booking system**: Name, phone, email, date, participants, message – stored in MongoDB
- **Contact form**: Submissions stored in MongoDB
- **Admin dashboard** (CMS): Login, manage experiences (CRUD), view bookings, view contact submissions
- **SEO**: Metadata, OpenGraph, Twitter cards, sitemap.xml, robots.txt

## Tech stack

- **Frontend**: Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Framer Motion, GSAP, Three.js / React Three Fiber
- **UI**: Lucide React icons, custom components
- **Backend**: Next.js API Routes, Server Actions
- **Database**: MongoDB
- **Auth**: NextAuth.js (Credentials provider for admin)

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Environment variables**  
   Copy `.env.example` to `.env.local` and set:
   - `MONGODB_URI` – MongoDB connection string (required for bookings, contact, admin experiences)
   - `NEXTAUTH_SECRET` – random string (e.g. `openssl rand -base64 32`)
   - `NEXTAUTH_URL` – e.g. `http://localhost:3000`
   - `ADMIN_EMAIL` – admin login email
   - `ADMIN_PASSWORD_HASH` – bcrypt hash of admin password:
     ```bash
     node scripts/hash-admin-password.js YOUR_PASSWORD
     ```
     Put the printed hash in `ADMIN_PASSWORD_HASH`.

3. **Run**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000). Admin: [http://localhost:3000/admin](http://localhost:3000/admin).

## Build & deploy

```bash
npm run build
npm start
```

Deploy to **Vercel**: connect the repo and set the same env vars. The app uses the `(site)` route group for the public site (with Navbar/Footer) and `/admin` for the dashboard (no Navbar/Footer).

## Project structure

- `src/app/(site)/` – Public pages (Home, About, Experiences, Contact) with shared layout (Navbar + Footer)
- `src/app/admin/` – Admin login and dashboard (experiences, bookings, contact)
- `src/app/api/` – Bookings, contact, experiences, NextAuth, admin APIs
- `src/components/` – Navbar, Footer, Hero (Three.js), ExperienceCard, BookingForm, ContactForm, sections
- `src/lib/` – DB, auth, constants, experiences data/seed, utils

## SEO keywords (example)

wayanad tourism, eco tourism wayanad, wayanad tourism packages, wayanad trekking, visit wayanad kerala, wayanad adventure tourism, wayanad nature tourism, kerala eco tourism, best places in wayanad.

Google Ads–oriented: wayanad tourism packages, best tourism in wayanad, wayanad eco tourism, visit wayanad kerala, wayanad trekking tours, wayanad forest tourism.
