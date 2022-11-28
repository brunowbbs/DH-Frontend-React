import { render, screen } from "@testing-library/react";
import App from "./App";

test("Verfica se o App.js esta renderizando corretamente", () => {
  render(<App />);

  const text = screen.getByRole("heading", { name: "Hello World" });

  expect(text).toBeInTheDocument();
});

// it()
