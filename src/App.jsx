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
import CreateProperty from "./pages/CreateProperty";
import MyProperties from "./pages/MyProperties";
import useAuth from "./services/useAuth";

const App = () => {
  const { userId, userRole, updateUser, updateRole, logoutUser } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const { pathname } = useLocation();

  return (
    <>
      <Navbar
        setShowModal={setShowModal}
        id={userId}
        role={userRole}
        logoutUser={logoutUser}
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
          <Route path="saved_properties" element={<SavedProperties />} />
          <Route path="create_property" element={<CreateProperty />} />
          <Route path="my_properties" element={<MyProperties />} />
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
      <Footer location={pathname} />
    </>
  );
};

export default App;
