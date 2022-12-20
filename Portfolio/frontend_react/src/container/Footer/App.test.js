import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Test the inputs in Footer component", () => {
  test("Should render placeholder in input", async () => {
    render(<Footer />);
    const contactsName = screen.getByPlaceholderText("Your Name");
    const contactsEmail = screen.getByPlaceholderText("Your Email");
    expect(contactsName).toBeTruthy();
    expect(contactsEmail).toBeTruthy();
  });
});

describe("Test the Btn in the Footer component", () => {
  test("render the contact form with 1 button", async () => {
    render(<Footer />);
    const button = await screen.findByRole("button");
    expect(button).toBeTruthy();
  });
});
