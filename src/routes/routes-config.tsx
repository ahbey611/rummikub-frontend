import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Board from "../pages/Board";

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/board" element={<Board />} />

      {/* 404 放最后 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
