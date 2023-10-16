import apiFetch from "./api-fetch";

export function getSavedProperties() {
  return apiFetch("/user_properties/saved");
}

export function getContactedProperties(){
  return apiFetch("/user_properties/contacted")
}

export function createContactedProperty(propertyId){
  return apiFetch("/user_properties/create_contacted", {body: propertyId})
}

export function createSavedProperty(propertyId){
  return apiFetch("/user_properties/create_saved", {body: propertyId})
}
