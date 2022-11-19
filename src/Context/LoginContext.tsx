import React, { createContext, useState } from "react";

type LoginContextType = {
  logged: boolean;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
  userNameConnected: string;
  setUserNameConnected: React.Dispatch<React.SetStateAction<string>>;
};

export const LoginContext = createContext({} as LoginContextType);

export function LoginProvider(props: any) {
  const [logged, setLogged] = useState(false);
  const [userNameConnected, setUserNameConnected] = useState("");

  return (
    <LoginContext.Provider
      value={{ logged, setLogged, userNameConnected, setUserNameConnected }}
    >
      {props.children}
    </LoginContext.Provider>
  );
}
