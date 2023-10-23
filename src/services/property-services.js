import apiFetch from "./api-fetch";

export function getProperties() {
    return apiFetch("/properties");
}
export async function createProperty(data = { address, area, bathrooms, bedrooms, description, is_active, latitude, longitude, maintenance_price, operation_type, pet_friendly, property_price, property_type, rent_value, urls, user_id }) {
    return await apiFetch("/properties", {
      body: data,
      method: "POST",
    });
  }

export async function updateProperty(id, data) {
  return await apiFetch(`/properties/${id}`, {
    body: data,
    method: "PATCH",
  });
}

export function showProperty(id) {
  return apiFetch(`/properties/${id}`)
    .then((response) => {
      if (response) {
        return response;
      } else {
        throw new Error("Property not found");
      }
    })
    .catch((error) => {
      console.error("Error fetching property:", error);
      throw error; 
    });
}