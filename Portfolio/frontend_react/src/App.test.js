import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import Footer from "./container/Footer/Footer";
import Header from "./container/Header/Header";
import { Navbar } from "./components";

describe("Test the Navabar component", () => {
  test("list  contains 5 items", async () => {
    render(<Navbar />);
    const listElement = screen.getByRole("list");
    const listItems = screen.getAllByRole("listitem");
    expect(listElement).toBeInTheDocument();
    expect(listElement).toHaveClass("app__navbar-links");
    expect(listItems.length).toEqual(5);
  });
});

describe("Test the Header component", () => {
  test("Should render without crash", async () => {
    render(<Header />);
    const forHeader = screen.getByTestId("header");
    expect(forHeader).toBeInTheDocument();
  });
});

describe("Test the Skills component", () => {
  test("should render text for h2", async () => {
    render(<App />);
    expect(screen.getByText("skills")).toBeInTheDocument();
  });
});

describe("Test the Footer component", () => {
  test("Should render without crash", async () => {
    render(<Footer />);
    const forFooter = screen.getByTestId("footer");
    expect(forFooter).toBeTruthy();
  });
});
