import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const element = screen.getByText(/Hello/i);
    expect(element).toBeInTheDocument();
  });
});

describe("Nested", () => {
  test("renders a name", () => {
    render(<Greet name="Ania" />);
    const element = screen.getByText("Hello Ania");
    expect(element).toBeInTheDocument();
  });
});
