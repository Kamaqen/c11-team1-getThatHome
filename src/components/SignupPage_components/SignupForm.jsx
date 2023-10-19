import styled from "@emotion/styled";
import InputSignUp from "../InputSignUpForm";
import Button from "../Button";
import { signUp } from "../../services/user-services";
import { useNavigate } from "react-router-dom";

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

const Signupform = ({ role }) => {
  const navigate = useNavigate();
  const userRole = role === "landlord" ? 0 : 1;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    password: "",
    password_confirmation: "",
    role: userRole,
  });

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      if (formData.password !== formData.password_confirmation) {
        console.error("Passwords do not match");
        return;
      }
      await signUp(formData).then();
      navigate("/list");
      window.location.reload();
    } catch (error) {
      console.error("Error in registry:", error);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <>
      <MainBackground>
        <SignUpForm onSubmit={handleSubmit}>
          <h5 className="headline5">Create your Account</h5>
          <InputContainer>
            <InputSignUp
              label="name"
              id="name"
              placeholder="John Doe"
              value={formData.value}
              onChange={handleChange}
              required
            />
            <InputSignUp
              label="email"
              id="email"
              type="email"
              placeholder="user@mail.com"
              value={formData.value}
              onChange={handleChange}
              required
            />
            <InputSignUp
              label="phone"
              id="phone_number"
              type="phone"
              placeholder="999-999-999"
              value={formData.value}
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
              label="password_confirmation"
              id="password_confirmation"
              type="password"
              placeholder="*****"
              value={formData.value}
              onChange={handleChange}
              required
            />

            <Button type="submit" variant="Primary">
              Create account
            </Button>
          </InputContainer>
        </SignUpForm>
      </MainBackground>
    </>
  );
};

export default Signupform;
