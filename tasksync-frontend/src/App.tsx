import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
// import Dashboard from '../src/pages/Dashboard';

const App = () => {
  // const isAuthenticated = !!localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        /> */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
