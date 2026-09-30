<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# IMPORTANT AI INSTRUCTIONS FOR WIOCARE

## General Guidelines

- Use NEXT.JS default `<Link />` component for routing or using hyperlinks.
- Try to make it best industry standard, scalable and maintainable highest speed and highest best practice product.

## UI & Styling

- Use shadcn ui from the beginning of the project from Home Page to Dashboard everywhere. Try to use highest of shadcn component to make consistency.
- Use shadcn skeleton ui for loading UI.
- Use `<Suspense />` component to show the loading UI.
- Use Next.js `<Image />` tag everywhere.
- Always use the `.section` class (defined in `globals.css`) instead of Tailwind's `container` class for section wrappers.

## Component Architecture

- Try to use highest of server component. If there is a need for any client component, don't make the full page client component. Split the page in multiple components and make a component which handles the client side rendering.
- Don't make any layout and page client component.
- **Section Tags:** Everywhere, you must use a `<section>` tag per section.
- **Page Composition:** Every page's sections must be split into multiple components. Each component could be further split into multiple components.
  Example format:
  ```tsx
  const Homepage = () => (
    <>
      <Banner />
      <Hero />
    </>
  );
  ```
- **Directory Structure:**
  - Common usable components go in `@/components/common`.
  - Shared components go in `@/components/shared`.
  - Each page's sections must be placed in a `_section` folder within that page's directory.
  - Suspense UI components must be placed in a `_suspense` folder within that page's directory.
  - Inside `_section` and `_suspense` folders, there can be nested folders for further split components.

## Async Components and Params Handling

- **Suspense Boundaries:** Only dynamic things that require fetching should be wrapped in the `<Suspense>` component. Static parts (like page headers, introductory text, and filters) must be placed at the page level outside of Suspense. This ensures that the skeleton UI only masks the dynamic content itself (e.g., data grids or list items).
- **No Unused Params:** If there is no need for `params` or `searchParams` in a page or component, do not include them in the props.
- Use the common `IPageProps` type from `@/types` for page and component props (only when needed).
- Resolve the `params` and `searchParams` in nested async components (if required):

```tsx
import { IPageProps } from "@/types";

const Page = ({ params, searchParams }: IPageProps) => {
  return (
    <Suspense fallback={<LoadingUi />}>
      <NestedComponent params={params} searchParams={searchParams} />
    </Suspense>
  );
};

const NestedComponent = async ({ params, searchParams }: IPageProps) => {
  const resolvedParams = await params;
  // or
  const [resolvedParams, resolvedSearchParams] = await Promise.all([
    params,
    searchParams,
  ]);

  return <>Your code goes here...</>;
};
```

## TypeScript and Validation

- Must use TypeScript.
- Must avoid using `any` type.
- Without 100% certainty, don't assert any type.
- Ensure reusable types. Instead of making multiple types for each file, try to acquire types from zod schema or other already defined types (e.g., using `Pick`, `Omit`, `extend`, etc).
- **Interface Naming:** Interface names should start with an 'I' prefix (e.g., `IUser`, `IPatient`, `IDoctor`).
- Use Zod for form validation.
- Use `react-hook-form` (built in with shadcn) and `zodResolver` for form validation.

## Data Fetching

- Use `publicFetch` function where you don't need any cookies.
- Use `serverFetch` where needed to send cookies.

## State Management

- Use `zustand` for managing global state
