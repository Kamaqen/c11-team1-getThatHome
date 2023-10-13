import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";
function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Navigate to="/main" />} />
        <Route path="main" element={<LandingPage />} />
        <Route path="property_details" element={<PropertyDetailsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
