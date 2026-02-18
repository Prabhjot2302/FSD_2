# Experiment 5: Optimize frontend performance using lazy loading

## Learning Outcomes

By completing this experiment, you will be able to:

1. **Set up client-side routing with React Router** — Use `BrowserRouter`, `Routes`, `Route`, and `Link` to build a single-page application with multiple views (e.g., Home, About, Contact) without full page reloads.

2. **Implement lazy loading with `React.lazy`** — Load route components on demand using `React.lazy(() => import('./component'))` so that only the active route’s code is fetched when the user navigates, reducing initial bundle size.

3. **Use `Suspense` for loading states** — Wrap lazy-loaded components in `<Suspense fallback={...}>` to show a fallback UI (e.g., "Loading...") while the chunk is being fetched, improving perceived performance.

4. **Understand code-splitting** — See how the build tool (Vite) splits each lazy-loaded component into a separate chunk; the browser loads these chunks only when needed, which keeps the initial load fast.

5. **Structure a small SPA** — Organize an app with a persistent navigation bar and route-specific content, and know when to lazy-load (route components) versus loading eagerly (e.g., navigation) for a good user experience.

---

## About the Experiment

This experiment demonstrates how to optimize frontend performance using **lazy loading** and **React Router**. The app has three routes — Home, About, and Contact — and each route component is loaded only when the user navigates to it. The heading, navigation links, and route content are shown in separate visual boxes on a dimmed gradient background.

### What's Implemented

| Part | Description | Components / Files |
|------|-------------|---------------------|
| **Heading** | Page title in its own box at the top. | `App.jsx` (`.page-heading`) |
| **Navigation** | Links for Home, About, Contact in a separate box. | `Navigation.jsx` |
| **Route content** | Home, About, or Contact view in a third box; each is lazy-loaded. | `Home.jsx`, `About.jsx`, `Contact.jsx` |

### Key Observations

- **Lazy loading**: `Home`, `About`, and `Contact` are imported with `React.lazy()`. When you first open the app, only the Home chunk (or the route you land on) is loaded. Clicking "About" or "Contact" fetches that route’s chunk; you may see "Loading..." briefly.

- **Code-splitting**: The production build creates separate JS chunks (e.g. `Home-*.js`, `About-*.js`, `Contact-*.js`) in addition to the main bundle. This keeps the initial download smaller.

- **Navigation is not lazy**: The nav bar is imported normally so it appears immediately; only the route content below it is lazy-loaded.

### Tech Stack

- **React** 19 — UI library
- **React Router DOM** 7 — Client-side routing
- **Vite** 7 — Build tool and dev server

### How to Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

*Made by Chinmay*
