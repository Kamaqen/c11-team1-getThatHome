// import CardComponent from "./components/CardComponent";
// const pro = {
//     img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80",
//     price: 100000,
//     operation: "rent",
//     type: "apartment",
//     address: "Calle 123",
//     bed: 3,
//     bath: 2,
//     area: 200,
//     pet: true,
//     footer: false,
// };

///////////////////
// function App() {
//   const [isChecked, setIsChecked] = useState(false);

//   const handleCheckboxChange = (newState) => {
//     setIsChecked(newState);
//   };

//   return (
//     <div>
//       <CheckboxCategory
//         name="Category one"
//         checked={isChecked}
//         onChange={handleCheckboxChange}
//       />
//     </div>
//   );
// }

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