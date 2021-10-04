import React from 'react';
import { expect, test, describe } from "@jest/globals";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Modal from "../components/Modal";

const company = {
  "id": 1246,
  "company_name": "Apple",
  "budget": 120000,
  "budget_spent": 32000,
  "date_of_contract_sign": "2021-03-05"
}
 
describe("<Modal />", () => {
 
  test('it renders a number input', () => {
    render(<Modal company={company} />);
 
    const inputEl = screen.getByTestId("budget-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "number");
  });
 
  test('the input field is prefilled with the budget of the client', () => {
    render(<Modal company={company} />);
 
    expect(screen.getByTestId("budget-input")).toHaveValue(120000);
  });
 
  test('the value must be valid and a number', () => {
    render(<Modal company={company} />);
 
    const inputEl = screen.getByTestId("budget-input");
    userEvent.type(inputEl, "test");
 
    expect(screen.getByTestId("budget-input")).toHaveValue(null);
  });

  test('The value must be not less than the budget spent', () => {
    render(<Modal company={company} />);
 
    const inputEl = screen.getByTestId("budget-input");
    userEvent.type(inputEl, 31000);
 
    expect(screen.getByRole("alert")).toHaveTextContent('Budget should be superior to current budget spent!');
  });
 
});