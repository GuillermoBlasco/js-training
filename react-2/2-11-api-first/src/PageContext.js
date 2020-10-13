import React from 'react';
import {EmployeeList} from "./EmployeeList";

// https://dev.to/nazmifeeroz/using-usecontext-and-usestate-hooks-as-a-store-mnm
export const PageContext = React.createContext(0);

export const PageContextProvider = ({ children }) => {
  const [page, setPage] = React.useState(0);

  return (
    <PageContext.Provider value={{page, setPage}}>
      {children}
    </PageContext.Provider>);
};


export const usePage = () => {
  const {page} = React.useContext(PageContext);
  return page;
}


export const useSetNextPage = () => {
  const {page, setPage} = React.useContext(PageContext);
  return () => setPage(page + 1);
}

export const useSetPrevPage = () => {
  const {page, setPage} = React.useContext(PageContext);
  return () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
}
