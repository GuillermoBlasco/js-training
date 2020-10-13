import React from 'react';
import './App.css';
import { PageContextProvider} from "./PageContext";
import {EmployeeList} from "./EmployeeList";
import {NavBar} from "./NavBar";
import {ThemeContextProvider} from './ThemeContext';


function App() {
  return (
    <PageContextProvider>
      <ThemeContextProvider>
        <div className="App">
          <NavBar />
          <EmployeeList />
        </div>
      </ThemeContextProvider>
   </PageContextProvider>);

}

export default App;
