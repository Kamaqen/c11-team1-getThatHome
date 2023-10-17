import { tokenKey } from "../config";
import apiFetch from "./api-fetch";

export function signUp(userData){
  return apiFetch("/users", {body: userData}).then(u=>{
    const {token, ...user} = u;
    sessionStorage.setItem(tokenKey, token);
    sessionStorage.setItem("userId", user.id)
    sessionStorage.setItem("userRole", user.role)
    return user
  })
}

export function updateUser(id,userData){
  return apiFetch(`/profile/${id}`, {method:"PATCH", body: userData}).then(u=>{
    const {_token, ...user} = u;
    return user;
  })
}

export function getUser(id){
  return apiFetch(`/profile/${id}`).then((userData)=>{
    const {_token, ...user} = userData;
    return user;
  })
}


