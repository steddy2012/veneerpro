import { Routes, Route } from "react-router-dom";

import DashboardLayout from "src/components/DashboardLayout";

import Overview from "./Overview";
import Calculator from "./Calculator";
import Reports from "./Reports";
import ProjectIncomplete from "./projectPages/ProjectIncomplete";
import ProjectCompleted from "./projectPages/ProjectCompleted";
import UserProfile from "./settingsPages/UserProfile";
import CompanyProfile from "./settingsPages/CompanyProfile";
import Team from "./settingsPages/Team";
import Subscriptions from "./settingsPages/Subscriptions";
import Purchases from "./settingsPages/Purchases";

// <Route path='/' element={<DashboardLayout />}> this line is the layout for the dashboard
// Did it this way b/c whenever clicking on a sidebar link the entire dashboard doesnt refresh/change only the content of the page will change
// All these routes are only for dashboard routes: dashboard/settings, dashboard/reports... If want to add other routes not for dashboard you can do that in App.tsx
// When wrapping all other routes with <Route path='/' element={<DashboardLayout />}> it will show all other routes inside of the layout.
// It shows it in the <Outlet /> component inside the DashboardLayout component.

const Dashboard = () => {
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
