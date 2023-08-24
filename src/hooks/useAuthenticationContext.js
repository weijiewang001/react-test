import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthContext";

// custom useAuthentication hooks
export default function useAuthentication(){
  return useContext(AuthenticationContext)
}