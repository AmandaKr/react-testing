import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  const skills = ["React", "Typescript", "Next.js"];

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getAllByRole("listitem");
    expect(listElement).toHaveLength(skills.length);
  });

  test("renders login button", () => {
    render(<Skills skills={skills} />);
    const button = screen.getByRole("button", { name: "Login" });
    expect(button).toBeInTheDocument();
  });

  test("not renders Start Learning button", () => {
    render(<Skills skills={skills} />);
    const button = screen.queryByRole("button", { name: "Start learning" });
    expect(button).not.toBeInTheDocument(); // use queryByRole when the element is NOT present in the DOM
  });

  test("start learning button is eventually displayed", async () => {
    render(<Skills skills={skills} />);
    const button = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      { timeout: 2000 }
    );
    expect(button).toBeInTheDocument();
  });
});
