import styled from "@emotion/styled";
import { useState } from "react";
import { login } from "../services/auth-services";
const DivStyle = styled.div`
width: 400px;
hei
`;

const LoginModal = () => {
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    function handleLogin(credentials) {
        console.log(credentials);
        login(credentials)
            .then((u) => setFormData(u))
            .catch((error) => console.log(error));
        console.log("hello", user);
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
        <DivStyle>
            <form onSubmit={handleSubmit}>
                <input
                    name="email"
                    type="email"
                    value={formData.value}
                    onChange={handleChange}
                    placeholder="example@mail.com"
                    label="Email"
                />
                <input
                    name="password"
                    type="password"
                    value={formData.value}
                    onChange={handleChange}
                    placeholder="**"
                    label="Password"
                />
                <button type="submit">Login</button>
            </form>
        </DivStyle>
    );
};

export default LoginModal;
