import apiFetch from "./api-fetch";

export function getProperties(credentials) {
    return apiFetch("/properties", { body: credentials }).then((u) => {
        const data = u;
        // console.log("ahora data es:", data);
        return data;
    });
}
