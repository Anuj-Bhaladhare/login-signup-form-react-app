import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Home from './component/Home';
import LoginForm from './component/LoginForm';
import SignUppForm from './component/SignUppForm';
import Navbar from './component/Navbar'; // Corrected the component name to "Navbar"
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar /> {/* Corrected the component name to "Navbar" */}
      <Switch>
        <Route exact path="/" component={Home} /> {/* Use 'exact' to match the root path */}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/loginform" component={LoginForm} />
        <Route path="/signform" component={SignUppForm} />
      </Switch>
    </div>
  );
}

export default App;
