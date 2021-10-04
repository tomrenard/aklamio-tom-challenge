import React, { useState } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1040;
  background-color: rgba(0, 0, 0, 0.5);
  .hide {
    display: none;
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  display: flex;
  align-items: center;
`;

const ModalStyles = styled.div`
  z-index: 100;
  background: #fff;
  position: relative;
  margin: auto;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
  padding: 1rem;
  text-align: center;
  .close {
    border: none;
    cursor: pointer;
    position: absolute;
    right: 5%;
    top: 20%;
    &:hover {
      background-color: red;
      color: white;
    }
  }
  form {
    padding: 1rem;
  }
  label,
  input {
    margin-right: 10px;
  }
  .submit {
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #36a18b;
      color: white;
    }
  }
  .alert-message {
    margin-top: 10px;
  }
`;

export default function Modal({ company, updateCompanyBudget, onClose }) {
  const [updatedCompany, setUpdatedCompany] = useState(company);
  const isValid = updatedCompany.budget > updatedCompany.budget_spent;
  const updateCompany = (e) => {
    e.preventDefault();
    if (!isValid) {
      return;
    }
    onClose();
    // UX could be improved by closing the modal if the user clicked outside the box if the value has not been updated.
    updateCompanyBudget(updatedCompany);
  };
  return (
    <>
      <ModalOverlay>
        <ModalWrapper>
          <ModalStyles>
            <h2>{updatedCompany.company_name}</h2>
            <button className="close" onClick={() => onClose()}>
              X
            </button>
            <form onSubmit={updateCompany}>
              <label>Edit budget:</label>
              <input
                data-testid="budget-input"
                type="number"
                name="Budget"
                value={updatedCompany.budget}
                onChange={(e) =>
                  setUpdatedCompany({
                    ...updatedCompany,
                    budget: parseInt(e.target.value),
                  })
                }
              />
              <button
                className="submit"
                disabled={!updatedCompany.budget || !isValid}
              >
                Submit
              </button>
              {isValid ? null : (
                <div className="alert-message" role="alert">
                  Budget should be superior to current budget spent!
                </div>
              )}
            </form>
          </ModalStyles>
        </ModalWrapper>
      </ModalOverlay>
    </>
  );
}
