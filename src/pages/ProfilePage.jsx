import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { getUser, signUp, updateUser } from "../services/user-services";
import { useNavigate } from "react-router-dom";
import InputSignUp from "../components/InputSignUpForm";
import Button from "../components/Button";

const MainBackground = styled.div`
  width: 100%;
  height: calc(100vh - 160px);
  background: linear-gradient(to bottom, #f48fb126 50%, transparent 50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 10px 0px #00000033;
  background-color: #ffffff;
  width: 388px;
  height: 468px;
  border-radius: 8px;
  gap: 16px;
`;
const Caption = styled.p`
  font-family: var(--font-secondary);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4000000059604645px;
  text-align: left;
  margin-top: 4px;
  color: #8e8e8e;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const ProfilePage = () => {
  const userRole = sessionStorage.getItem("userRole") === "landlord" ? 0 : 1;
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    email: "",
    password: "",
    role: userRole,
  });

  async function updatingUser(event) {
    event.preventDefault();
    const userId = sessionStorage.getItem("userId");
    await updateUser(userId, formData);
    navigate("/");
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleGetUser() {
    const userId = sessionStorage.getItem("userId");
    const user = await getUser(userId);
    setUserData(user);
    setFormData({
      name: user.name,
      email: user.email,
      phone_number: user.phone_number,
      password: "", // Puedes elegir si quieres mostrar la contraseña del usuario
    });
  }

  useEffect(() => {
    handleGetUser();
  }, []);

  useEffect(() => {}, [userData]);

  return (
    <>
      <MainBackground>
        <SignUpForm onSubmit={updatingUser}>
          <h5 className="headline5">Profile</h5>
          <InputContainer>
            <InputSignUp
              label="name"
              id="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <InputSignUp
              label="email"
              id="email"
              type="email"
              placeholder="user@mail.com"
              value={formData.email}
              readOnly
              required
              style={{ cursor: "not-allowed" }}
            />
            <InputSignUp
              label="phone"
              id="phone_number"
              type="phone"
              placeholder="999-999-999"
              value={formData.phone_number}
              onChange={handleChange}
              required
            />
            <div>
              <InputSignUp
                label="password"
                id="password"
                type="password"
                placeholder="*****"
                value={formData.value}
                onChange={handleChange}
                required
              />
              <Caption>At least 6 characters</Caption>
            </div>
            <InputSignUp
              label="password confirmation"
              id="password confirmation"
              type="password"
              placeholder="*****"
              value={formData.value}
              required
            />

            <Button type="submit" variant="Primary">
              UPDATE ACCOUNT
            </Button>
          </InputContainer>
        </SignUpForm>
      </MainBackground>
    </>
  );
};
