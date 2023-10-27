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
import MyProperties from "./pages/MyProperties";
import { ProfilePage } from "./pages/ProfilePage";
import EditForm from "./pages/EditProperty";
import { getProperties } from "./services/property-services";

const App = () => {
  const [idUser, setIdUser] = useState(sessionStorage.getItem("userId"));
  const [role, setRole] = useState(sessionStorage.getItem("userRole"));
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const properties = await getProperties();
      setData(properties);
      console.log(properties);
      localStorage.setItem("propertiesData", JSON.stringify(properties));
    };
    fetchData();
  }, []);

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

  const updateData = (newData) => {
    setData(newData);
  };

  const updateUser = (userId) => {
    setIdUser(userId);
  };
  const updateRole = (userRole) => {
    setRole(userRole);
  };

  return (
    <>
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
          <Route
            path="create_property"
            element={<CreateProperty setData={updateData} />}
          />
          <Route
            path="my_properties"
            element={data && <MyProperties data={data} setData={setData} />}
          />
          <Route
            path="edit_property/:id"
            element={<EditForm setData={updateData} />}
          />
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
