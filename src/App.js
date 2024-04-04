import React from 'react'
import "./App.css";
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Tableditels from './components/Tableditels';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<RegistrationForm />} />
          <Route path={"/LoginForm"} element={<LoginForm />} />
          <Route path={"/Tableditels"} element={<Tableditels />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
