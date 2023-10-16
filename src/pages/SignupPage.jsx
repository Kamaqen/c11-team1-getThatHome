import Signuplanding from "../components/signupPage_components/Signuplanding";
import Signupform from "../components/signupPage_components/Signupform";
import { useState } from "react";

const SignupPage = () => {
  const [role, setRole] = useState(null); // Agrega un estado para controlar el rol

  return (
    <>
      {role === null ? ( // Si el rol es nulo, muestra la vista de selección de perfil
        <Signuplanding setRole={setRole} />
      ) : (
        <Signupform /> // Si se ha seleccionado un rol, muestra el formulario
      )}
    </>
  );
};

export default SignupPage;
