import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Skills from "./Skills";

describe("test if skills page is rendered", () => {
  test("check if skills page are rendered", async () => {
    render(<Skills />);
    const element = screen.getByTestId("skills");
    expect(element).toBeInTheDocument();
  });
});


