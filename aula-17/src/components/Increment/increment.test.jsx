import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Increment from ".";

describe("<Increment/>", () => {
  test("Verificar se valor inicial = 0", () => {
    render(<Increment />);

    expect(
      screen.getByRole("heading", { level: 1, name: 0 })
    ).toBeInTheDocument();
  });

  test("Verificar se ao clicar no botao o valor altera para 1", () => {
    render(<Increment />);

    const button = screen.getByRole("button");

    userEvent.click(button);
    userEvent.click(button);

    const value = screen.getByText(2);

    expect(value).toBeInTheDocument();
  });
});
