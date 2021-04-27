import React, { useReducer } from "react";
 
let user = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo")).user
  : "";

 
export const initialState = {
  userInfo: "" || user,
  loading: false,
  errorMessage: null
};
 
export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        userInfo:action.payload,
        // token: action.payload.auth_token,
        loading: false
      };
    case "LOGIN_ERROR":
      return {
        loading: false,
        error:action.payload,
      };
    case "LOGOUT":
      return {
        ...initialState,
        userInfo: "",
        token: ""
      };
 
    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error
      };
 
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};