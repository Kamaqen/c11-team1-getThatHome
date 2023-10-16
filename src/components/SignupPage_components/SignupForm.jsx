import styled from "@emotion/styled";
import InputSignUp from "../InputSignUpForm";
import Button from "../Button";

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

const Signupform = () => {
  return (
    <>
      <MainBackground>
        <SignUpForm>
          <h5 className="headline5">Create your Account</h5>
          <InputContainer>
            <InputSignUp
              label="name"
              id="name"
              placeholder="John Doe"
              required
            />
            <InputSignUp
              label="email"
              id="email"
              type="email"
              placeholder="user@mail.com"
              required
            />
            <InputSignUp
              label="phone"
              id="phone"
              type="phone"
              placeholder="999-999-999"
              required
            />
            <div>
              <InputSignUp
                label="password"
                id="password"
                type="password"
                placeholder="*****"
                required
              />
              <Caption>At least 6 characters</Caption>
            </div>
            <InputSignUp
              label="password confirmation"
              id="password confirmation"
              type="password"
              placeholder="*****"
              required
            />
          </InputContainer>

          <Button variant="Primary">Create account</Button>
        </SignUpForm>
      </MainBackground>
    </>
  );
};

export default Signupform;
