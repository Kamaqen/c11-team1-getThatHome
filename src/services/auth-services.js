import apiFetch from "./api-fetch";
import { tokenKey } from "../config";

export function login(credentials) {
    return apiFetch("/login", { body: credentials }).then((u) => {
        const { token, ...user } = u;
        sessionStorage.setItem(tokenKey, token);
        sessionStorage.setItem("userId", user.id);
        return user;
    });
}

export function logout() {
    return apiFetch("/logout", { method: "GET" }).then(() => {
        sessionStorage.removeItem(tokenKey);
        sessionStorage.removeItem("userId");
    });
}
