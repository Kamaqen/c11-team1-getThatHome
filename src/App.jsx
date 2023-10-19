import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";
import ListViewPage from "./pages/ListViewPage";
import SignupPage from "./pages/SignupPage.jsx";
import Navbar from "./components/Navbar";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import LoginModal from "./components/LoginModal";
import Footer from "./components/Footer";
import SavedProperties from "./pages/SavedProperties";
import CreateProperty from "./pages/CreateProperty";
import { logout } from "./services/auth-services";
import { MyProperties } from "./pages/MyProperties";
import { ProfilePage } from "./pages/ProfilePage";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  const [idUser, setIdUser] = useState(sessionStorage.getItem("userId"));
  const [role, setRole] = useState(sessionStorage.getItem("userRole"));
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    setIdUser(sessionStorage.getItem("userId"));
    setRole(sessionStorage.getItem("userRole"));
  }, []);

  const handleLogout = () => {
    logout();
    setIdUser(null);
    setRole(null);
    navigate("/");
  };

  const updateUser = (userId) => {
    setIdUser(userId);
  };
  const updateRole = (userRole) => {
    setRole(userRole);
  };

  return (
    <>
      <AuthProvider>
        <Navbar
          setShowModal={setShowModal}
          id={idUser}
          role={role}
          onLogout={handleLogout}
        />
        <Routes>
          <Route path="/">
            <Route index element={<Navigate to="/main" />} />
            <Route path="main" element={<LandingPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route
              path="property_details/:id"
              element={<PropertyDetailsPage />}
            />
            <Route path="list" element={<ListViewPage />} />
            <Route
              path="signup"
              element={<SignupPage setIdUser={setIdUser} setRole={setRole} />}
            />
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
      </AuthProvider>
    </>
  );
};

export default App;
