import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Rank } from "../screens/Rank";
import { Login } from "../screens/Login";
import { Groups } from "../screens/Groups";
import { Playoffs } from "../screens/Playoffs";
import { MenuTabs } from "../screens/MenuTabs";
import { Register } from "../screens/Register";
import { GroupPhase } from "../screens/GroupPhase";

import { useContext, useEffect } from "react";
import { LoginContext } from "../Context/LoginContext";

export function RoutesConfig() {
  const { logged, setLogged, setUserNameConnected } = useContext(LoginContext);

  useEffect(() => {
    const loginSavedDataString = localStorage.getItem("login");
    if (loginSavedDataString !== null) {
      const loginSavedData = JSON.parse(loginSavedDataString);
      setUserNameConnected(loginSavedData.userName);
      setLogged(true);
    }
  }, []);
  
  return (
    <Router>
      <Routes>
        {logged === true ? (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/menutabs" element={<MenuTabs />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/rank" element={<Rank />} />
            <Route path="/groupgames" element={<GroupPhase />} />
            <Route path="/playoffs" element={<Playoffs />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
      </Routes>
    </Router>
  );
}
