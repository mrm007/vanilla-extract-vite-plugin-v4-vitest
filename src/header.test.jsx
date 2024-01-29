import { render, screen } from "@testing-library/react";

import { H1 } from "./header.jsx";

describe("Heading component", () => {
  test("renders a HeroH1", () => {
    render(<H1 hero />);
    const element = screen.getByRole("heading", { level: 1 });

    expect(element.tagName).toBe("H1");
    expect(element).toHaveClass("heading_H1_hero_true__bjgk3l1");
  });

  test("renders a H1 hero italic", () => {
    render(<H1 hero italic />);
    const element = screen.getByRole("heading", { level: 1 });

    expect(element).toHaveClass("heading_H1_italic_true__bjgk3l2");
    expect(element).toHaveClass("heading_H1_hero_true__bjgk3l1");
    expect(element.tagName).toBe("H1");
  });

  test("renders a H1", () => {
    render(<H1 />);
    const element = screen.getByRole("heading", { level: 1 });

    expect(element).not.toHaveClass("heading_H1_hero_true__bjgk3l1");
    expect(element.tagName).toBe("H1");
  });

  test("renders a H1 italic", () => {
    render(<H1 italic />);
    const element = screen.getByRole("heading", { level: 1 });

    expect(element).toHaveClass("heading_H1_italic_true__bjgk3l2");
    expect(element.tagName).toBe("H1");
  });
});
