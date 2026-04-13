
# Property Listing App

A modern and SEO-friendly **Property Listing Web Application** built using Next.js (App Router). It supports server-side rendering, search functionality, pagination, and dynamic routing.

---

## Features

*  Search properties by name, location, amenities, price, and rating
*  Pagination for browsing multiple listings
*  Server-Side Rendering (SSR) with Next.js
*  Fully responsive UI using Tailwind CSS
*  Dynamic property detail pages
*  SEO optimized (Meta tags, Open Graph, Sitemap, Robots.txt)

---

## Tech Stack

* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS
* **Language:** JavaScript
* **SEO:** Metadata API, Sitemap, Robots.txt

---

## Folder Structure

```
app/
  layout.js
  page.js
  sitemap.js
  robots.js

components/
  Navbar.js
  PropertyCard.js

data/
  properties.js

public/
  og-image.png
```

---

## Getting Started

### 1. Clone the repository

```
git clone https://github.com/QuantumCode01/property-app.git
```

### 2. Go to project folder

```
cd property-app
```

### 3. Install dependencies

```
npm install
```

### 4. Run the development server

```
npm run dev
```

Open: http://localhost:3000

---

## 🌐 Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production:

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## 📈 SEO Setup

This project includes:

* Dynamic metadata using `generateMetadata`
* Open Graph tags for social sharing
* Canonical URLs
* Sitemap → `/sitemap.xml`
* Robots → `/robots.txt`


---

##  Author

**Saurabh Singh**
Frontend Developer

---




