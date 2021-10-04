# Frontend Challenge 2021

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Information

The Cool Ads is a very successful advertising company with a lot of clients. The CEO of the company, Elon Must, needs a place in which he can visualize the actual clients, their information, and in some cases update the approved budget they have with the company.

### Task #A

Create a react application (you can use create-react-app if you want) that displays a list of the clients of the company. This list must include the following information:
● Company name of the client
● Date of contract signature with The Cool Ads
● Total Budget Available
● Budget already spent
● Budget left

### Task #B

When you click on the client row, you have to open a dialog/modal showing the client name as the title, one editable input field and a submit button:
● This input field is prefilled with the budget of the client.
● The user can edit/modify this value and submit the change.
● The value must be valid (a number, not less than the budget spent). Submit button must
be disabled if no value was entered.
● After clicking on the submit button, the new value for budget and budget_left should be
displayed in the principal list, and the dialog/modal/popup should be closed.

The dialog/modal component must be covered by unit tests.
