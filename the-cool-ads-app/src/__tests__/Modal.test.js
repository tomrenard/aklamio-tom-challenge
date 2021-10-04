import React from "react";
import { expect, test, describe } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "../components/Modal";

// I've only implemented basics tests, we should test if the new value for budget and budget_left is
// displayed in the list, and that the dialog/modal/popup should be closed.

const company_1 = {
  id: 1246,
  company_name: "Apple",
  budget: 120000,
  budget_spent: 32000,
  date_of_contract_sign: "2021-03-05",
};

const company_2 = {
  id: 1248,
  company_name: "N26",
  budget: "test",
  budget_spent: 30000,
  date_of_contract_sign: "2021-04-09",
};

const company_3 = {
  id: 1247,
  company_name: "Facebook",
  budget: 1200,
  budget_spent: 31000,
  date_of_contract_sign: "2021-04-05",
};

describe("<Modal />", () => {
  test("it renders a number input", () => {
    render(<Modal company={company_1} />);

    const inputEl = screen.getByTestId("budget-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "number");
  });

  test("the input field is prefilled with the budget of the client", () => {
    render(<Modal company={company_1} />);

    expect(screen.getByTestId("budget-input")).toHaveValue(120000);
  });

  test("the value must be valid and a number", () => {
    render(<Modal company={company_2} />);

    expect(screen.getByTestId("budget-input")).toHaveValue(null);
  });

  test("The budget value must be not less than the budget spent", () => {
    render(<Modal company={company_3} />);

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Budget should be superior to current budget spent!"
    );
  });
});
