import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import ClientHomePage from './ClientHomePage';
import Layout from './Layout';
import LoginPage from './admin/pages/LoginPage'; // Ensure LoginPage component is imported
import { AppProvider, useAppContext } from './AppContext'; // Import AppProvider

function App() {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <MainRoutes />
        </Layout>
      </Router>
    </AppProvider>
  );
}

function MainRoutes() {
  const { isAdmin } = useAppContext(); 

  return (
    <Routes>
      <Route path="/admin/login" element={<LoginPage />} />
      {isAdmin ? (
        <Route path="/admin" element={<AdminDashboard />} />
      ) : (
        <Route path="/" element={<ClientHomePage />} />
      )}
    </Routes>
  );
}

export default App;
