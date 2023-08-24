import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchAPI } from "./API/api";
import useFetch from "./hooks/useFetch";
import Navbar from "./pages/home/Navbar";
import Home from "./pages/home/home";
import SearchResult from "./pages/search/SearchResult";
import { getApiConfig, getGenre } from "./store/homeSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    apiConfiguration();
  });

  const apiConfiguration = () => {
    fetchAPI("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfig(url));
    });
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<SearchResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
