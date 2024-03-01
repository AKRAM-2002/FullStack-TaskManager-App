// Routes.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes as RouterRoutes, BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

const Routes = () => {
  return (
    <Router>
      <Routes>
        {renderRoutes(routes)}
        </Routes>
    </Router>
  );
};

export default Routes;
