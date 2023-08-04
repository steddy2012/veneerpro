import { Routes, Route } from "react-router-dom";

import MainPageLayout from "src/components/mainPageComponents/MainPageLayout";
import MPDefault from "../mainFunnelPages/MPDefault";
import MPGrow from "../mainFunnelPages/MPGrow";
import MPHelp from "../mainFunnelPages/MPHelp";
import MPPricing from "../mainFunnelPages/MPPricing";
import MPProducts from "../mainFunnelPages/MPProducts";

const MainPage = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPageLayout />}>
        <Route index element={<MPDefault />} />
        <Route path="products" element={<MPProducts />} />
        <Route path="pricing" element={<MPPricing />} />
        <Route path="help" element={<MPHelp />} />
        <Route path="grow" element={<MPGrow />} />

        {/* This is if the user types in a route that doesnt exist: /dashboard/water, it will show this page. Can make this its own page */}
        <Route path="*" element={<div>Page doesnt exist</div>} />
      </Route>
    </Routes>
  );
};

export default MainPage;
