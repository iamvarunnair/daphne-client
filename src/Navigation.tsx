import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import { useAuthStore } from "./state/useAuthStore";
// import Loader from './pages/Loader';
// import Dashboard from './pages/Dashboard/Dashboard';
// import { useSignIn } from './services/useSignIn.ts';

const Navigation = () => {
  const token = useAuthStore((state) => state.token);

  return (
    <>
      <Router>
        <Routes>
          {!token ? <Route path="/register" element={<Register />} /> : null}
          {token ? <Route path="/dashboard" element={<Dashboard />} /> : null}
        </Routes>
      </Router>
    </>
  );
};

export default Navigation;
