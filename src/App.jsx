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

import { useState } from "react";
import CheckboxCategory from "./components/InputCategory";

function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (newState) => {
    setIsChecked(newState);
  };

  return (
    <div>
      <CheckboxCategory
        name="Category one"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </div>
  );
}

export default App;
