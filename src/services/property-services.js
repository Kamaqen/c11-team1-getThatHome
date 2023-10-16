import apiFetch from "./api-fetch";

export function createProperty(propertyData){
    return apiFetch("/properties", { body: propertyData });
  }

export function editProperty(id, propertyData){
    return apiFetch(`/properties/${id}`, { method: "PATCH", body: propertyData})
}

export function getProperties() {
    return apiFetch("/properties");
}
