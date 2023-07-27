import { Routes, Route } from 'react-router-dom';

import DashboardLayout from 'src/components/DashboardLayout';

import Overview from './Overview';
import Projects from './Projects';
import Calculator from './Calculator';
import Reports from './Reports';
import Settings from './Settings';

// <Route path='/' element={<DashboardLayout />}> this line is the layout for the dashboard
// Did it this way b/c whenever clicking on a sidebar link the entire dashboard doesnt refresh/change only the content of the page will change
// All these routes are only for dashboard routes: dashboard/settings, dashboard/reports... If want to add other routes not for dashboard you can do that in App.tsx
// When wrapping all other routes with <Route path='/' element={<DashboardLayout />}> it will show all other routes inside of the layout.
// It shows it in the <Outlet /> component inside the DashboardLayout component.

const Dashboard = () => {
  return (
    <Routes>
      <Route path='/' element={<DashboardLayout />}>
        <Route path='overview' element={<Overview />} />
        <Route path='projects' element={<Projects />} />
        <Route path='calculator' element={<Calculator />} />
        <Route path='reports' element={<Reports />} />
        <Route path='settings' element={<Settings />} />

        {/* This is if the user types in a route that doesnt exist: /dashboard/water, it will show this page. Can make this its own page */}
        <Route path='*' element={<div>Page doesnt exist</div>} />
      </Route>
    </Routes>
  );
};

export default Dashboard;
