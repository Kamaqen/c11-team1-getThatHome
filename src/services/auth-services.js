import apiFetch from "./api-fetch";
import { tokenKey } from "../config";

export function login(credentials) {
    return apiFetch("/login", { body: credentials }).then((u) => {
        console.log(u);
        const { token, ...user } = u;
        console.log(token, user);
        sessionStorage.setItem(tokenKey, token);
        return user;
    });
}

export function logout() {
    return apiFetch("/logout", { method: "GET" }).then(() => {
        sessionStorage.removeItem(tokenKey);
    });
}
