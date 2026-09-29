---
name: create-page
description: Guide for creating a new Next.js page following WioCare standards.
---

# Create Page Skill

When asked to create a new page in the WioCare project, follow these steps:

1. **Server Component by Default:** Ensure the page is a Server Component. Do NOT use `'use client'` in a page (`page.tsx`) file.
2. **Params and SearchParams Handling:** Do not await `params` or `searchParams` directly in the page component. Instead, pass them to a nested asynchronous Server Component wrapped in a `<Suspense>` boundary using a shadcn skeleton UI as a fallback.

   ```tsx
   import { Suspense } from "react";
   import { Skeleton } from "@/components/ui/skeleton";
   import NestedComponent from "./_components/nested-component";
   import { IPageProps } from "@/types";

   export default function Page({ params, searchParams }: IPageProps) {
     return (
       <Suspense fallback={<Skeleton className="w-full h-screen" />}>
         <NestedComponent params={params} searchParams={searchParams} />
       </Suspense>
     );
   }
   ```

3. **Nested Async Component:** Inside the nested component, use `Promise.all` to await `params` and `searchParams`.
   ```tsx
   export default async function NestedComponent({
     params,
     searchParams,
   }: IPageProps) {
     const [resolvedParams, resolvedSearchParams] = await Promise.all([
       params,
       searchParams,
     ]);
     // Use resolvedParams and resolvedSearchParams

     return <div>Page Content</div>;
   }
   ```
4. **Data Fetching:** Fetch data inside the nested component. Use the `publicFetch` function if no cookies are needed, or `serverFetch` if cookies are required.
5. **Types:** Define types by extending, picking, or omitting existing types/zod schemas. Do not use `any`. Use TypeScript strictly. All shared or global type definitions must be placed in the `src/types/` directory and exported from `src/types/index.ts`. Interface names should start with an 'I' prefix (e.g., `IUser`, `IPatient`).
6. **UI and Navigation:** Use shadcn ui components, `<Link>` for routing, and `<Image>` for images everywhere. If you use the `fill` property in the Image component, you MUST also use the `sizes` property.
7. **Page Composition & Sections:** Every page's sections must be split into multiple components. Each component could be multiple nested components. Example format:
   ```tsx
   const Homepage = () => (
     <>
       <Banner />
       <Hero />
     </>
   );
   ```
   Everywhere you must use a `<section>` tag per section.
8. **Directory Structure for Pages:**
   - Each page's sections will be in the page folder inside a `_section` folder.
   - Suspense UI components will be under a `_suspense` folder within the page folder.
   - Inside the `_section` and `_suspense` folders, there could be nested folders for split components.
   - Always use the `.section` class (defined in `globals.css`) instead of Tailwind's `container` class for section wrappers.
