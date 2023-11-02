import { useState } from "react";
import Signuplanding from "../components/SignupPage_components/SignupLanding";
import Signupform from "../components/SignupPage_components/SignupForm";

const SignupPage = () => {
  const [role, setRole] = useState(null);

  return (
    <>
      {role === null ? (
        <Signuplanding setRole={setRole} />
      ) : (
        <Signupform role={role} />
      )}
    </>
  );
};

export default SignupPage;
