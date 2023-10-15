import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";
import ListViewPage from "./pages/ListViewPage";
import SignupPage from "./pages/SignupPage.jsx";
import Navbar from "./components/Navbar";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import LoginModal from "./components/LoginModal";
import Footer from "./components/Footer";
import SavedProperties from "./pages/SavedProperties";

const App = () => {
    const [user, setUser] = useState(sessionStorage.getItem("userId"));
  const [role, setRole] = useState(sessionStorage.getItem("userRole"));
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const location = useLocation();
  const currentRoute = location.pathname;

  const updateUser = (userId) => {
    setUser(userId);
  };
  const updateRole = (userRole) => {
    setRole(userRole);
  };

    return (
        <>
        <Navbar
        setShowModal={setShowModal}
        setUser={setUser}
        user={user}
        role={role}
        />
        <Routes>
            <Route path="/">
                <Route index element={<Navigate to="/main" />} />
                <Route path="main" element={<LandingPage />} />
                <Route
                    path="property_details/:id"
                    element={<PropertyDetailsPage />}
                />
                <Route path="list" element={<ListViewPage />} />
                <Route path="signup" element={<SignupPage />} />
                <Route path="saved_properties" element={<SavedProperties/>} />
            </Route>
        </Routes>
        {showModal &&
        createPortal(
          <div ref={modalRef}>
            <LoginModal
              onClose={() => {
                setShowModal(false);
                updateUser(sessionStorage.getItem("userId"));
                updateRole(sessionStorage.getItem("userRole"));
              }}
            />
          </div>,
          document.body
        )}
        <Footer location={currentRoute} />
        </>
    );
};

export default App;
