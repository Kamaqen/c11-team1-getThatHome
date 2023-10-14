import styled from "@emotion/styled";
import { useState } from "react";
import { login } from "../services/auth-services";
import Input from "./Inputlau";

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
`;

const LoginModal = ({ onClose }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    function handleLogin(credentials) {
        console.log(credentials);
        login(credentials)
            .then((u) => {
                setFormData(u);
                onClose();
                console.log(u);
            })
            .catch((error) => console.log(error));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        handleLogin(formData);
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
            <BGModal />
            <StyledModal>
                <StyledForm onSubmit={handleSubmit}>
                    <Input
                        label="Email"
                        id="email"
                        name="email"
                        placeholder="example@mail.com"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Input
                        label="Password"
                        id="password"
                        name="password"
                        placeholder="**"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <button type="submit">Login</button>
                </StyledForm>
            </StyledModal>
        </>
    );
};

export default LoginModal;
