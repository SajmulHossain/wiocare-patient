---
name: split-component
description: Guide for splitting a large or full page component into smaller, manageable sub-components, especially to isolate client-side logic.
---
# Split Component Skill

When asked to split a component or a page in the WioCare project, adhere to the following best practices:

1. **Isolate Client Logic:** Do not make the full page a client component. If a page or a large component requires client-side interactivity, extract ONLY the interactive parts into a separate component file with `'use client'`. Leave the rest (data fetching, layout, static content) as Server Components.
2. **Component Boundaries:** Split the page into multiple components. Keep the main page as a server component and import the interactive client components where needed.
3. **Suspense Boundaries:** Use `<Suspense>` components strategically around sub-components that fetch data or execute asynchronous operations. Use a shadcn skeleton UI (`<Skeleton />`) as the fallback.
4. **Props Passing:** Pass only necessary data to client components. If a client component must wrap server components, pass the server components as `children` to maintain the server component benefits.
5. **Types Reusability:** When splitting components, ensure the types are shared from a central definition or the parent schema instead of duplicating them. Use `Pick` or `Omit` from the main type to define the props for the sub-components.
6. **No `any` Types:** Use strict TypeScript. Avoid `any` and type assertions.
7. **Section & Suspense Folders:** When splitting sections of a page:
   - Place page section components in a `_section` folder within that page's directory.
   - Place any suspense UI/fallback components in a `_suspense` folder within that page's directory.
   - You can create nested folders inside `_section` and `_suspense` for further splitting of components.
