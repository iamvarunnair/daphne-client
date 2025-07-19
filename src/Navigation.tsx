import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
// import Loader from './pages/Loader';
// import Dashboard from './pages/Dashboard/Dashboard';
// import { useSignIn } from './services/useSignIn.ts';

const Navigation = () => {
  // useSignIn();

  return (
    <>
        <Router>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
    </>
  );
};

export default Navigation;
