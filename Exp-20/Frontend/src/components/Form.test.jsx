import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import Form from "./form";

describe("Login Form Component", () => {
  beforeEach(() => {
    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("RENDERS email and password fields", () => {
    render(<Form />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("SHOWS ERROR for short password", () => {
    render(<Form />);

    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);
    const button = screen.getByRole("button", { name: /login/i });

    fireEvent.change(email, { target: { value: "test@test.com" } });
    fireEvent.change(password, { target: { value: "123" } });

    fireEvent.click(button);

    expect(screen.getByText("Minimum 6 characters")).toBeInTheDocument();
  });

  it("SUBMITS successfully with valid input", () => {
    render(<Form />);

    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);
    const button = screen.getByRole("button", { name: /login/i });

    fireEvent.change(email, { target: { value: "test@test.com" } });
    fireEvent.change(password, { target: { value: "123456" } });

    fireEvent.click(button);

    expect(window.alert).toHaveBeenCalledWith("Form submitted successfully");
  });

});
