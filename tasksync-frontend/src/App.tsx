import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Authorization from './pages/Authorisation';
// import Dashboard from '../src/pages/Dashboard';
import Tasks from './pages/Tasks';
const App = () => {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Authorization />} />
 {/* Protected Route: /tasks */}
        <Route
          path="/tasks"
          element={isAuthenticated ? <Tasks /> : <Navigate to="/auth" />}
        />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
