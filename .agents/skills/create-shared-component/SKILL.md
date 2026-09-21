---
name: create-shared-component
description: Guide for creating a shared component following WioCare standards.
---
# Create Shared Component Skill

When asked to create a shared or reusable component in the WioCare project, adhere to the following rules:

1. **UI Consistency:** Rely heavily on shadcn ui components from the beginning of the project. Extend them logically when custom styling is strictly necessary. Try to use highest of shadcn components to maintain consistency.
2. **Component Type:** Default to Server Components. If interactivity (state, effects, event listeners) is required, use `'use client'`, but keep the client component as small and localized as possible.
3. **Typing:** 
   - Use TypeScript strictly.
   - Define prop types clearly.
   - Do not use `any` and do not assert types without 100% certainty.
   - Prefer deriving types from existing schemas using `zod.infer`, `Pick`, or `Omit`, or extend already defined types rather than creating new types for each file.
4. **Images:** Always use `<Image />` from `next/image` for any assets instead of standard `<img>` tags.
5. **Forms:** For form components, use `react-hook-form` along with `@hookform/resolvers/zod` (built in with shadcn form) and Zod for validation.
6. **Links:** Use NEXT.JS default `<Link />` component for routing or using hyperlinks.
7. **Directory Structure:**
   - Place common usable components in the `@/components/common` folder.
   - Place shared components in the `@/components/shared` folder.
