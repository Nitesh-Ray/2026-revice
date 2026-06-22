import {Routes, Route} from "react-router-dom";
// src/App.jsx – inside the <Routes> block, add this Route
import PerformanceDemo from "./pages/PerformanceDemo";

import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <div>
      <Routes>
        // ... inside Routes with other Route components:
        <Route path="/performance" element={<PerformanceDemo />} />
        <Route path="/products-page" element={<ProductsPage />} />
      </Routes>
    </div>
  );
}
export default App;
