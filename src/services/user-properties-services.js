import apiFetch from "./api-fetch";

export function getSavedProperties() {
  return apiFetch("/user_properties/saved");
}

export function getContactedProperties() {
  return apiFetch("/user_properties/contacted");
}