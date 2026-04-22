import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

function App() {
  return <h1>Hello</h1>;
}

describe("App Test", () => {
  it("renders text", () => {
    render(<App />);
    expect(screen.getByText("Hello")).toBeTruthy();
  });
});