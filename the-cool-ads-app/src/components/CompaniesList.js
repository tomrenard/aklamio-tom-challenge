import React from 'react';
import styled from 'styled-components';
import Company from './Company';

const CompaniesListStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1000px;
  border: 3px solid #2271FF;
  margin: 1rem auto;
  background-color: #F9F9F9;
  border-radius: 10%;
  padding: 1rem;
  text-align: center;
  .list-companies {
    display: flex;
    margin: auto;
    flex-direction: column;
    justify-content: center;
  }
  h1 {
    color: #FC6053;
  }
  p {
    color: grey;
  }  
`;

export default function CompaniesList({companies, updateCompanyBudget}) {
  return (
    <CompaniesListStyles>
      <h1>The Cool Ads - Clients</h1>
      <p>Please click on the client row to edit the current budget.</p>
      <div className="list-companies">
        {companies.map((company) => {
          return <Company key={company.id} company={company} updateCompanyBudget={updateCompanyBudget} />
        })}
      </div>
    </CompaniesListStyles>
  )
}
