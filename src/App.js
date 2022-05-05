import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";
import Hotel from "./Pages/Hotel/Hotel";
import Search from "./Components/Search/Search";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="list" element={<List />} />
        <Route path="search" element={<Search />} />
        <Route path="hotel" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}