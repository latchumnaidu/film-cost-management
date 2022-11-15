import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './Pages/LandingPage';
import { AuthContextProvider } from './Contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
       <LandingPage />
     </AuthContextProvider>
    </div>
  );
}

export default App;
