import apiFetch from "./api-fetch";

export function getProperties() {
    return apiFetch("/properties");
}
