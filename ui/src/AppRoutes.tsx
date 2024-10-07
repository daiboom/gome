// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login';
import Home from './pages/index';
import HandlerPage from './pages/handler';
import ServiceLayout from './layouts/ServiceLayout';
import AuthLayout from './layouts/AuthLayout';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<ServiceLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/handler" element={<HandlerPage />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/auth/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
