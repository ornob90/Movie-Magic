import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAPI } from "./API/api";
import useFetch from "./hooks/useFetch";
import Home from "./pages/home/home";
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
    <>
      <Home />
    </>
  );
}

export default App;
