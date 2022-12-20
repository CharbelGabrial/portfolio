import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Work from "./Work";

describe("Test if works renders", () => {
  test("Checks if works renders", async () => {
    render(<Work />);
    const element = screen.getByTestId("work");
    expect(element).toBeInTheDocument();
  });
});
