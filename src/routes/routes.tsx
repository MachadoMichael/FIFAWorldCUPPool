import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Rank } from "../screens/Rank";
import { Login } from "../screens/Login";
import { Groups } from "../screens/Groups";
import { Warning } from "../screens/Warning";
import { MenuTabs } from "../screens/MenuTabs";
import { Register } from "../screens/Register";
import { GroupGames } from "../screens/GroupGames";

export function RoutesConfig() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/warning" element={<Warning />} />
        <Route path="/menutabs" element={<MenuTabs />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/groupgames" element={<GroupGames />} />
      </Routes>
    </Router>
  );
}
