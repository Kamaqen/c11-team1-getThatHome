import apiFetch from "./api-fetch";

export function getProperties(credentials) {
    return apiFetch("/properties", { body: credentials });
}

export async function createProperty(data = { adress, area, bathrooms, bedrooms, description, is_active, latitude, longitude, maintenance_price, operation_type, pet_friendly, property_price, property_type, rent_value, urls, user_id }) {
    return await apiFetch(`/properties`, {
      body: data,
      method: "POST",
    });
  }
