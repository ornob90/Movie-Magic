import { useEffect } from "react";
import { fetchAPI } from "./API/api";
import useFetch from "./hooks/useFetch";
import Home from "./pages/home/home";

function App() {
  // useEffect(() => {
  //   getApiRes();
  // });

  // const getApiRes = () => {
  //   fetchAPI("/movie/popular")
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <>
      <Home />
    </>
  );
}

export default App;
