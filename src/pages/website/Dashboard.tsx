import { Routes, Route } from "react-router-dom";

import DashboardLayout from "src/components/DashboardLayout";

import Overview from "../dashboardPages/Overview";
import Calculator from "../dashboardPages/Calculator";
import Reports from "../dashboardPages/Reports";
import ProjectIncomplete from "../dashboardPages/projectPages/ProjectIncomplete";
import ProjectCompleted from "../dashboardPages/projectPages/ProjectCompleted";
import UserProfile from "../dashboardPages/settingsPages/UserProfile";
import CompanyProfile from "../dashboardPages/settingsPages/CompanyProfile";
import Team from "../dashboardPages/settingsPages/Team";
import Subscriptions from "../dashboardPages/settingsPages/Subscriptions";
import Purchases from "../dashboardPages/settingsPages/Purchases";

// <Route path='/' element={<DashboardLayout />}> this line is the layout for the dashboard
// Did it this way b/c whenever clicking on a sidebar link the entire dashboard doesnt refresh/change only the content of the page will change
// All these routes are only for dashboard routes: dashboard/settings, dashboard/reports... If want to add other routes not for dashboard you can do that in App.tsx
// When wrapping all other routes with <Route path='/' element={<DashboardLayout />}> it will show all other routes inside of the layout.
// It shows it in the <Outlet /> component inside the DashboardLayout component.

interface TokenData {
  /* Define the structure of your token data here */
  // For example:
  id: number;
  email: string;
  // Add other properties from your actual token data
}

interface DashboardProps {
  token: TokenData;
}

const Dashboard: React.FC<DashboardProps> = ({ token }) => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="overview" element={<Overview />} />
        <Route path="projects/incomplete" element={<ProjectIncomplete />} />
        <Route path="projects/completed" element={<ProjectCompleted />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings/userProfile" element={<UserProfile />} />
        <Route path="settings/companyProfile" element={<CompanyProfile />} />
        <Route path="settings/team" element={<Team />} />
        <Route path="settings/subscriptions" element={<Subscriptions />} />
        <Route path="settings/purchases" element={<Purchases />} />

        {/* This is if the user types in a route that doesnt exist: /dashboard/water, it will show this page. Can make this its own page */}
        <Route path="*" element={<div>Page doesnt exist</div>} />
      </Route>
    </Routes>
  );
};

export default Dashboard;
