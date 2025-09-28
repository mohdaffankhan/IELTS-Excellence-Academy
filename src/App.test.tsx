import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App Component", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("renders all main sections", () => {
    render(<App />);

    // Check for navbar
    expect(screen.getByRole("navigation")).toBeInTheDocument();

    // Check for main content
    expect(screen.getByRole("main")).toBeInTheDocument();

    // Check for footer
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("renders hero section with headline", () => {
    render(<App />);
    expect(
      screen.getByText(/Achieve Your IELTS Band Score Goals/i)
    ).toBeInTheDocument();
  });

  it("renders features section", () => {
    render(<App />);
    expect(
      screen.getByText(/Why Choose Our IELTS Program/i)
    ).toBeInTheDocument();
  });

  it("renders testimonials section", () => {
    render(<App />);
    expect(screen.getByText(/What Our Students Say/i)).toBeInTheDocument();
  });
});
