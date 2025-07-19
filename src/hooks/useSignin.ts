import React from "react";
import { useFetch } from "./useFetch";
import { useAuthStore } from "../state/useAuthStore";

const useSignin = () => {
  const { callAPI } = useFetch({
    url: "http://localhost:4000/user/register",
    method: "POST",
  });
  const setToken = useAuthStore((state) => state.setToken);
  const signIn = async (email: string, password: string) => {
    const response = await callAPI({ input: { email, password } });
    if (response.token) {
      setToken(response.token);
    }
  };
  return { signIn };
};

export default useSignin;
