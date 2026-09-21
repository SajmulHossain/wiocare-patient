---
name: create-layout
description: Guide for creating a Next.js layout following WioCare standards.
---

# Create Layout Skill

When asked to create a new layout in the WioCare project, follow these steps:

1. **Server Component:** The layout MUST be a Server Component. Never add `'use client'` to a layout (`layout.tsx`) file.
2. **Structure:** Wrap the `children` prop and include any shared UI such as headers, footers, or sidebars.
3. **UI Components:** Use shadcn ui components where applicable for consistency.
4. **Links:** Use Next.js `<Link>` component for all navigation inside the layout.
5. **Types:** Ensure strong TypeScript typing for the layout props, specifically `children` and `params`. Do not use `any`.
6. **Section Tags:** Everywhere, you must use a `<section>` tag per section of the layout.

   ```tsx
   import { ReactNode } from "react";

   type LayoutProps = {
     children: ReactNode;
   };

   export default function Layout({ children }: LayoutProps) {
     return (
       <section className="flex min-h-screen flex-col">
         {/* Navigation / Header goes here */}
         <main className="flex-1">{children}</main>
       </section>
     );
   }
   ```
