# Experiment 6: Handle forms and validations in frontend

## Learning Outcomes

By completing this experiment, you will be able to:

1. **Build forms with Material UI (MUI)** — Use MUI components such as `TextField`, `Button`, `Container`, `Typography`, `Checkbox`, `Radio`, `RadioGroup`, `Select`, and `MenuItem` to create a structured, accessible login-style form.

2. **Manage form state with `useState`** — Keep form values (e.g., email, password, gender, country, terms) and validation errors in React state, and update them with `onChange` handlers so the UI stays in sync with user input.

3. **Implement client-side validation** — Validate required fields, email format, minimum length (e.g., password), and custom rules (e.g., “terms must be checked”) before submit. Show per-field error messages using `error` and `helperText` on MUI components.

4. **Combine HTML5 and custom validation** — Use `e.target.checkValidity()` for native HTML5 rules (e.g., `required`, `type="email"`) and a custom `validate()` function for app-specific rules; only allow submit when both pass.

5. **Use lazy loading for the form** — Load the form component with `React.lazy()` and `<Suspense>` so the form code is in a separate chunk and the initial page load stays small; show a “Loading form...” fallback until the chunk is ready.

---

## About the Experiment

This experiment demonstrates how to **handle forms and validations in the frontend** using React and Material UI. A login-style form includes Email, Password, Gender (radio), Country (select), and a “terms and conditions” checkbox. All fields are validated on submit; invalid fields show helper text. The form is lazy-loaded, and the page uses a gradient background with a frosted card and a “made by chinmay” watermark.

### What's Implemented

| Field | Component | Validation |
|-------|-----------|------------|
| **Email** | `TextField` (type="email") | Required, valid email format |
| **Password** | `TextField` (type="password") | Required, min 6 characters |
| **Gender** | `RadioGroup` (Male / Female / Other) | Required |
| **Country** | `Select` (dropdown) | Required |
| **Terms** | `Checkbox` | Must be checked |
| **Submit** | `Button` (type="submit") | Runs HTML5 + custom `validate()` |

### Key Observations

- **Validation on submit**: `handleSubmit` calls `e.preventDefault()`, then `e.target.checkValidity()` (HTML5) and a custom `validate()` that sets an `errors` object. Each field’s `error` and `helperText` come from this `errors` state.

- **Lazy loading**: The form is in `src/components/form.jsx` and loaded with `React.lazy(() => import('./components/form'))` in `App.jsx`, wrapped in `<Suspense>`. The form chunk is fetched when the app loads; “Loading form...” is shown until it is ready.

### Tech Stack

- **React** 19 — UI library
- **MUI (Material UI)** 7 — Form and layout components
- **Emotion** — Styling (peer dependency for MUI)
- **Vite** 7 — Build tool and dev server

### How to Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (or the port shown) in your browser.

---

*Made by Chinmay*
