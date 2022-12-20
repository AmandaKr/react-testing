import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", { level: 2 });
    expect(sectionHeading).toBeInTheDocument();

    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();

    const imageElement = screen.getByAltText("people");
    expect(imageElement).toBeInTheDocument();

    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    const element = screen.getByRole("textbox", { name: "Name" });
    expect(element).toBeInTheDocument();

    const elementWithLabel = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(elementWithLabel).toBeInTheDocument();

    const elementWithPlaceholder = screen.getByPlaceholderText("Full Name");
    expect(elementWithPlaceholder).toBeInTheDocument();

    const elementWithDisplayValue = screen.getByDisplayValue("Test");
    expect(elementWithDisplayValue).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const termsElementWithLabel = screen.getByLabelText(
      "I agreee to the terms and conditions"
    );
    expect(termsElementWithLabel).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
