# AI Development Rules for LuxeDrive

This document outlines the technical stack and conventions to follow when developing the LuxeDrive application.

## Tech Stack

The application is built with a modern, type-safe, and component-based architecture.

- **Framework:** React with Vite for a fast development experience.
- **Language:** TypeScript for robust, type-safe code.
- **Routing:** React Router (`react-router-dom`) for all client-side navigation.
- **Styling:** Tailwind CSS for all utility-first styling. Custom CSS should be avoided.
- **Component Library:** shadcn/ui is the primary source for UI components (e.g., Button, Card, Input). It is built upon Radix UI.
- **Icons:** `lucide-react` is the designated library for all icons.
- **Forms:** `react-hook-form` for form state management and `zod` for schema validation.
- **Data Fetching & Server State:** `@tanstack/react-query` is used to manage asynchronous data and caching.
- **Notifications:** `sonner` is used for displaying toast notifications to the user.

## Library Usage Rules

To maintain consistency and code quality, please adhere to the following rules:

1.  **Styling:**
    -   **ALWAYS** use Tailwind CSS classes for styling.
    -   **DO NOT** write custom CSS in `.css` files unless absolutely necessary for global styles (like in `index.css`).
    -   Leverage theme variables defined in `tailwind.config.ts` and `src/index.css`.

2.  **Components:**
    -   **ALWAYS** check `shadcn/ui` for an existing component before creating a new one.
    -   New, reusable components should be created in the `src/components/` directory.
    -   Page-level components must be placed in the `src/pages/` directory.
    -   Keep components small and focused on a single responsibility.

3.  **Routing:**
    -   All application routes should be defined within `src/App.tsx`.
    -   Use the `Link` component from `react-router-dom` for internal navigation.

4.  **Icons:**
    -   **ONLY** use icons from the `lucide-react` library to ensure visual consistency.

5.  **State Management:**
    -   For data fetched from an API, use `@tanstack/react-query`.
    -   For local, component-specific state, use React's built-in hooks like `useState` and `useReducer`.

6.  **Forms:**
    -   **ALWAYS** use `react-hook-form` to manage form logic.
    -   Define validation schemas using `zod` and connect them using `@hookform/resolvers/zod`.

7.  **User Feedback:**
    -   Use `sonner` to provide non-blocking feedback to the user for actions like form submissions or errors.

By following these guidelines, we can ensure the application remains maintainable, consistent, and easy to extend.