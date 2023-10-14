import apiFetch from "./api-fetch";

export function getProperties(credentials) {
    return apiFetch("/properties", { body: credentials });
}
