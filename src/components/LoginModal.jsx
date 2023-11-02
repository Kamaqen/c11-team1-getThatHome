import styled from "@emotion/styled";
import { useState } from "react";
import { login } from "../services/auth-services";
import Input from "./Inputlau";
import Button from "./Button";
import { RiUserReceivedLine } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const iconRiUserReceivedLine = <RiUserReceivedLine />;
const iconRiCloseLine = <RiCloseLine />;

const StyledModal = styled.div`
    width: 388px;
    height: 256px;
    border-radius: 8px;
    box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 300px;
    right: 50%;
    transform: translate(50%, -50%);
    background: white;
    padding: 16px;
`;

const BGModal = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
`;

const StyledForm = styled.form`
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Buttonlog = styled.div`
    margin: 16px;
    /* Headline5 */
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    align-items: center;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px; /* Ajusta la posición superior según tus necesidades */
    right: 10px; /* Ajusta la posición derecha según tus necesidades */
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

const LoginModal = ({ onClose }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    function handleLogin(credentials) {
        login(credentials)
            .then((u) => {
                setFormData(u);
                onClose();
            })
            .catch((error) => console.log(error));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleLogin(formData);
        onClose();
        navigate("list");
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
            <BGModal />
            <StyledModal>
                <CloseButton onClick={onClose}>X</CloseButton>
                <StyledForm onSubmit={handleSubmit}>
                    Login
                    <Input
                        label="Email"
                        id="email"
                        name="email"
                        placeholder="test@mail.com"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Input
                        label="Password"
                        id="password"
                        name="password"
                        placeholder="********"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <Buttonlog>
                        <Button
                            variant="Primary"
                            type="submit"
                            icon={iconRiUserReceivedLine}>
                            Login
                        </Button>
                    </Buttonlog>
                </StyledForm>
            </StyledModal>
        </>
    );
};

export default LoginModal;
