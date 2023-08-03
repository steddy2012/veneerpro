import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Dashboard from "src/pages/website/Dashboard";
import MainFunnel from "./pages/website/MainFunnel";
import LoginPage from "./pages/website/LoginPage";
import SignUpPage from "./pages/website/SignUpPage";
import { useEffect, useState } from "react";

// path is the url path and element is just a react component, should be the from the pages folder

interface TokenData {
  /* Define the structure of your token data here */
  // For example:
  id: number;
  email: string;
  // Add other properties from your actual token data
}

const App: React.FC = () => {
  const [token, setToken] = useState<TokenData | false>(false);
  const navigate = useNavigate();

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");

    if (storedToken) {
      const data = JSON.parse(storedToken) as TokenData;
      setToken(data);
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainFunnel />} />
      <Route path="/login" element={<LoginPage setToken={setToken} />} />
      <Route path="/signup" element={<SignUpPage />} />

      {/* If the url path starts with /dashboard it will go to this route  */}
      {token ? (
        <Route path="/dashboard/*" element={<Dashboard token={token} />} />
      ) : (
        <Route path="/dashboard/*" element={<Navigate to="/login" />} />
      )}

      {/* Can add other routes here:  */}
      <Route path="/login" element={<div>Login</div>} />
    </Routes>
  );
};

export default App;
