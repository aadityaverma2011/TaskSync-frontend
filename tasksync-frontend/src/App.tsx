import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Authorization from './pages/Authorisation';
// import Dashboard from '../src/pages/Dashboard';

const App = () => {
  // const isAuthenticated = !!localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Authorization />} />
        {/* <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        /> */}
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
