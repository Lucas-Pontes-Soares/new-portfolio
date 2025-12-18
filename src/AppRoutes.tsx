import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Catch-all route for 404 page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}