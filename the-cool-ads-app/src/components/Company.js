import React, { useState } from 'react';
import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';
import Modal from './Modal';

const CompanyStyles = styled.div`
  display: flex;
  min-width: 500px;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  border: 1px solid lightgrey;
  padding: 1rem;
  margin: 0.5rem;
  background-color: white;
  &:hover {
    box-shadow: 0 0 0 4px #FC6053;
  }
  span {
    color: black;
    font-weight: bolder;
  }
  .header-infos {
    display: flex;
    flex-direction: column;
    p {
      color: grey;
      text-transform: lowercase;
    }
  }
`;

export default function Company({company, updateCompanyBudget}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { company_name, budget, budget_spent, date_of_contract_sign } = company;
  const budget_left = budget - budget_spent;
  return (
      <>
        <CompanyStyles onClick={() => setIsModalOpen(!isModalOpen) }>
          <div className="header-infos">
            <h2>{company_name}</h2>
            <p>Customer since {date_of_contract_sign}</p>
          </div>
          <div className="budget-infos"> 
            <p>Budget: <span>{formatMoney(budget)}</span></p>
            <p>Budget spent: <span>{formatMoney(budget_spent)}</span></p>
            <p>Budget left: <span>{formatMoney(budget_left)}</span></p>
          </div>
        </CompanyStyles>
        {isModalOpen ?
        <Modal onClose={() => setIsModalOpen(false)} company={company} updateCompanyBudget={updateCompanyBudget} />
        :
        null
        }
      </>
  )
}
