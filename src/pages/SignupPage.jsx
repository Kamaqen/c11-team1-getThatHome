import { useState } from "react";
import Signuplanding from "../components/SignupPage_components/SignupLanding";
import Signupform from "../components/SignupPage_components/SignupForm";

const SignupPage = () => {
  const [role, setRole] = useState(null); // Agrega un estado para controlar el rol

  return (
    <>
      {role === null ? ( // Si el rol es nulo, muestra la vista de selección de perfil
        <Signuplanding setRole={setRole} />
      ) : (
        <Signupform role={role} /> // Si se ha seleccionado un rol, muestra el formulario
      )}
    </>
  );
};

export default SignupPage;
