import apiFetch from "./api-fetch";

export function getProperties() {
    return apiFetch("/properties");
}
export function showProperty(propertyId) {
    return apiFetch(`/properties/${propertyId}`);
}
