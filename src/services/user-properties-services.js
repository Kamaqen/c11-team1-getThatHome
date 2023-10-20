import apiFetch from "./api-fetch";

export function createContacted(data = {property_id}){
  return apiFetch("/user_properties/create_contacted", {body: data, method: "POST"})
}

export function createSaved(data = {property_id}){
  return apiFetch("/user_properties/create_saved", {body: data, method: "POST"})
}

export function getSavedProperties() {
  return apiFetch("/user_properties/saved");
}

export function getContactedProperties() {
  return apiFetch("/user_properties/contacted");
}