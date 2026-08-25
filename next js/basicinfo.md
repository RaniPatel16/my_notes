# 📒 Next.js — Lecture 1



## 1. What is Next.js?



**Next.js is an open-source React framework** developed by **Vercel**.

Think of it like:

> **React + extra features needed to build real-world web applications**

React mainly helps you build the UI, while Next.js provides features such as:

- Routing
- Rendering
- SEO
- Image Optimization
- Data Fetching
- Code Splitting
- UI States
- Scaling

---

# 2. Key Features of Next.js

## ① File-Based Routing

One of the important features of Next.js is **File-Based Routing**.

In Next.js, your **folder and file structure can create your routes**.

### Example

```text
app/
├── page.tsx
├── about/
│   └── page.tsx
└── contact/
    └── page.tsx
```

This automatically creates:

```text
/          → Home
/about     → About
/contact   → Contact
```

So, you don't always need to manually configure routes like you commonly do with React Router.

---

# ② Rendering

There are different rendering methods in Next.js:

```text
Rendering
│
├── CSR → Client-Side Rendering
├── SSR → Server-Side Rendering
├── SSG → Static Site Generation
└── ISR → Incremental Static Regeneration
```

---

## CSR — Client-Side Rendering

In **Client-Side Rendering**, the browser receives JavaScript and renders the page.

```text
Server
   │
   ↓
JavaScript
   │
   ↓
Browser
   │
   ↓
UI
```

CSR is commonly associated with traditional React applications.

---

## SSR — Server-Side Rendering

In **Server-Side Rendering**, the server generates the HTML for a request.

```text
Browser
   │
   ↓
Server
   │
   ↓
HTML Generated
   │
   ↓
Browser
```

The page is generated on the server when the user requests it.

---

## SSG — Static Site Generation

In **Static Site Generation**, the page is generated ahead of time, usually during the build.

```text
Build Time
    │
    ↓
HTML Generated
    │
    ↓
User Requests Page
    │
    ↓
Already Generated Page
```

Useful for:

- Blogs
- Documentation
- Marketing Pages
- Portfolio Websites

---

## ISR — Incremental Static Regeneration

**ISR** combines the benefits of static pages with the ability to update them periodically.

```text
Generate Page
     │
     ↓
Serve Page
     │
     ↓
After Some Time
     │
     ↓
Regenerate Updated Page
```

ISR is useful when data changes but does not need to be updated on every request.

---

# ③ SEO

**SEO = Search Engine Optimization**

Next.js provides features that make it easier to build SEO-friendly websites.

For example:

```html
<title>My Portfolio</title>

<meta
  name="description"
  content="My developer portfolio"
/>
```

SEO helps search engines understand your website.

---

# ④ Code Splitting

**Code Splitting** means dividing JavaScript code into smaller pieces instead of sending the entire application's JavaScript at once.

### Example

```text
Home Page
    │
    ↓
Required JavaScript
```

```text
About Page
    │
    ↓
About-related JavaScript
```

This can improve application loading performance.

---

# ⑤ Image Optimization

Next.js provides the `Image` component for image optimization.

Instead of:

```html
<img src="/photo.jpg" />
```

you can use:

```tsx
import Image from "next/image";

<Image
  src="/photo.jpg"
  alt="Profile"
  width={500}
  height={500}
/>
```

Next.js can optimize image delivery for better performance.

> **Note:** Image optimization does not mean that every image will become a fixed size such as 5 KB. The important idea is that Next.js can optimize image delivery, sizing, and formats.

---

# ⑥ `<Link>` and Prefetching

Next.js provides the `Link` component for navigation.

```tsx
import Link from "next/link";

<Link href="/about">
  About
</Link>
```

`Link` is used for navigation between pages.

Next.js can also **prefetch** linked pages in appropriate situations.

### Example

```text
User is on Home
       │
       ↓
About Link is Visible
       │
       ↓
Next.js May Prefetch About
       │
       ↓
User Clicks About
       │
       ↓
Faster Navigation
```

---

# ⑦ Routing

Next.js has two major routing approaches:

```text
Routing
│
├── Pages Router
│
└── App Router
```

---

## Pages Router

The Pages Router uses the:

```text
pages/
```

directory.

### Example

```text
pages/
├── index.js
├── about.js
└── contact.js
```

Routes:

```text
/
/about
/contact
```

---

## App Router

The App Router uses the:

```text
app/
```

directory.

### Example

```text
app/
├── page.tsx
├── about/
│   └── page.tsx
└── contact/
    └── page.tsx
```

Routes:

```text
/
/about
/contact
```

The **App Router is the modern approach** used in newer Next.js projects.

---

# ⑧ UI States

Next.js supports special UI states.

For example:

```text
not-found.tsx
```

can be used to create a custom **404 Not Found** page.

Other important special files include:

```text
loading.tsx
error.tsx
not-found.tsx
```

These help handle different application states.

---

# ⑨ Data Fetching

Next.js provides different ways to fetch data depending on whether you are working with the server or client.

Example:

```tsx
const response = await fetch(
  "https://api.example.com/users"
);

const users = await response.json();
```

With the App Router, server-side data fetching is an important part of the framework.

---

# ⑩ Scaling

**Scaling** means making an application capable of handling:

- More users
- More traffic
- More data

as the application grows.

Next.js is designed for production applications and can be deployed on platforms such as Vercel and other hosting providers.

---

# 🛠️ Creating a Next.js Project

To create a new Next.js project:

```bash
npx create-next-app@latest
```

For example:

```bash
npx create-next-app@latest my-next-app
```

Then move into the project:

```bash
cd my-next-app
```

Start the development server:

```bash
npm run dev
```

The application normally opens at:

```text
http://localhost:3000
```

---

# 📁 Important Next.js Folder Structure

With the modern App Router, you will commonly see:

```text
my-next-app/
│
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── public/
│
├── package.json
├── next.config.ts
└── tsconfig.json
```

---

## `app/page.tsx`

This is the **Home Page**.

```text
app/page.tsx
      ↓
      /
```

---

## `app/about/page.tsx`

This creates:

```text
/about
```

Structure:

```text
app/
└── about/
    └── page.tsx
```

---

## `app/layout.tsx`

`layout.tsx` contains the common layout around your pages.

---

# 🧠 Next.js Lecture 1 — Overview

```text
                         NEXT.JS
                            │
             ┌──────────────┴──────────────┐
             │                             │
           React                         Vercel
             │
             ↓
      Full-Stack Framework
             │
    ┌────────┼───────────────┐
    │        │               │
 Routing  Rendering         SEO
    │        │               │
    │    ┌───┼────┐          │
    │    │   │    │          │
    │   CSR SSR  SSG/ISR      │
    │
    ├── App Router
    ├── Pages Router
    ├── Data Fetching
    ├── Image Optimization
    ├── Code Splitting
    ├── Link Prefetching
    ├── UI States
    └── Scaling
```

---

# ⭐ Most Important Things from Lecture 1

For the first lecture, focus mainly on these concepts:

### 1. Next.js

```text
Next.js = React Framework
```

### 2. File-Based Routing

```text
Folder/File Structure
        ↓
      Routes
```

### 3. Rendering

```text
CSR
SSR
SSG
ISR
```

### 4. SEO

```text
Search Engine Optimization
```

### 5. Image Optimization

```text
next/image
```

### 6. App Router

```text
app/
```

### 7. Data Fetching

```text
fetch()
```

---

# 📌 Quick Revision

```text
Next.js
│
├── File-Based Routing
├── CSR
├── SSR
├── SSG
├── ISR
├── SEO
├── Code Splitting
├── Image Optimization
├── Link + Prefetching
├── App Router
├── Pages Router
├── UI States
├── Data Fetching
└── Scaling
```

---

# 🚀 Important Commands

```bash
# Create Next.js application
npx create-next-app@latest my-next-app

# Move into project
cd my-next-app

# Start development server
npm run dev
```

Application:

```text
http://localhost:3000
```

---

# 🎯 Lecture 1 Summary

```text
Next.js
   ↓
React Framework
   ↓
Provides features for building real-world applications
   ↓
Routing + Rendering + SEO + Optimization
   ↓
Data Fetching + UI States + Scaling
```

> **Lecture 1 Focus:** Understand what Next.js is, why it is used, its major features, routing, rendering methods, and basic project structure.
