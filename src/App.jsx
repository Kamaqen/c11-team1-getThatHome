import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";
import ListViewPage from "./pages/ListViewPage";

const App = () => {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Navigate to="/main" />} />
                <Route path="main" element={<LandingPage />} />
                <Route
                    path="property_details/:id"
                    element={<PropertyDetailsPage />}
                />
                <Route path="list" element={<ListViewPage />} />
            </Route>
        </Routes>
    );
};

export default App;
