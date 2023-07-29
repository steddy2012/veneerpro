import { Routes, Route } from "react-router-dom";
import Dashboard from "src/pages/Dashboard";
import MainFunnel from "./pages/website/MainFunnel";

// path is the url path and element is just a react component, should be the from the pages folder

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainFunnel />} />

      {/* If the url path starts with /dashboard it will go to this route  */}
      <Route path="/dashboard/*" element={<Dashboard />} />

      {/* Can add other routes here:  */}
      <Route path="/login" element={<div>Login</div>} />
    </Routes>
  );
};

export default App;
