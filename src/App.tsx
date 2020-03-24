import React, { Suspense, lazy } from 'react';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Dashboard />
    </Router>
  )
}

export default App;
