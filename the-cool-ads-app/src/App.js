import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import CompaniesList from "./components/CompaniesList";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  const [companies, setCompanies] = useState([]);
  const retrieveCompanies = async () => {
    const response = await axios.get("http://localhost:3006/companies");
    return response.data;
  };
  const updateCompanyBudget = async (company) => {
    const response = await axios.put(
      `http://localhost:3006/companies/${company.id}`,
      company
    );
    const { id } = response.data;
    setCompanies(
      companies.map((company) => {
        return company.id === id ? { ...response.data } : company;
      })
    );
  };
  useEffect(() => {
    const getAllCompanies = async () => {
      const allCompanies = await retrieveCompanies();
      if (allCompanies) setCompanies(allCompanies);
    };
    getAllCompanies();
  }, []);
  // We should definitely implement a pagination and a search bar for a basic UX flow.
  return (
    <>
      <GlobalStyles />
      <CompaniesList
        companies={companies}
        updateCompanyBudget={updateCompanyBudget}
      />
    </>
  );
}

export default App;
