# Experiment 4: State Management in React

## Learning Outcomes

By completing this experiment, you will be able to:

1. **Differentiate between local and global state** — Understand when to keep state within a component versus sharing it across the application. Local state is ideal for UI-only data (e.g., form inputs, toggles); global state is needed when multiple components must read or update the same data.

2. **Implement component-level state with `useState`** — Use React's built-in hook to manage state that is isolated to a single component. Learn how each component instance maintains its own independent state, and when this approach is sufficient for your use case.

3. **Apply the React Context API** — Create and use Context with `createContext`, `Provider`, and `useContext` to avoid prop drilling. Share state between components without passing props through intermediate layers. Understand the provider-consumer pattern and when Context is a good fit for medium-sized apps.

4. **Implement Redux for global state** — Set up a Redux store, define reducers and actions, and connect components using `Provider`, `useSelector`, and `useDispatch`. Learn the unidirectional data flow: actions → reducers → store → components. Redux excels when you need predictable, centralized state with clear update patterns.

5. **Compare state management approaches** — Evaluate the trade-offs between Local State, Context API, and Redux in terms of complexity, scalability, and use cases. Know when to choose each approach based on app size, team preference, and state complexity.

---

## About the Experiment

This experiment demonstrates three different ways to manage state in a React application using a simple counter app. State management is central to building interactive UIs — choosing the right approach affects maintainability, performance, and developer experience. Each approach is implemented side by side so you can compare how the same feature (incrementing and decrementing a counter) is achieved with different tools.

### What's Implemented

| Approach | Description | Components |
|----------|-------------|------------|
| **Local State** | State lives inside the component using `useState`. Each counter instance maintains its own independent count. No shared state — ideal for isolated, component-specific data. | `CounterLocalState` |
| **Context API** | State is shared via React Context. A `CounterContextProvider` wraps the components, and they consume the context with `useContext`. Multiple counters read and update a single count. | `CounterGlobalContextParent`, `CounterGlobalContextAPI` |
| **Redux** | State is stored in a global Redux store. A reducer handles `INCREMENT` and `DECREMENT` actions. Components use `useSelector` to read state and `useDispatch` to trigger updates. | `CounterGlobalReduxParent`, `CounterReducer`, `store` |

### Key Observations

- **Local State**: Two separate counters (1 and 2) each have their own count — changing one does not affect the other. Each `<LocalStateCounter cno="1" />` and `<LocalStateCounter cno="2" />` is independent.

- **Context API**: Counters 1 and 2 share the same count because they are wrapped in a `CounterContextProvider`. Updating either counter updates both, since they read from the same context value.

- **Redux**: Counters 1 and 2 also share one count, managed by the Redux store. Actions like `{ type: "INCREMENT" }` are dispatched to the store, and the reducer returns the new state. All subscribed components re-render with the updated value.

### When to Use What

- **Local State** — Simple forms, UI toggles, component-specific data. Start here; add global state only when needed.
- **Context API** — Theme, language, auth state, or moderate shared data. Good for apps that don't need Redux's tooling.
- **Redux** — Large apps, complex state logic, need for DevTools, middleware, or time-travel debugging. Overkill for tiny projects.

### Tech Stack

- **React** 19 — UI library
- **Redux** & **React-Redux** — Global state management
- **Vite** — Build tool and dev server

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
