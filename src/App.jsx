import react, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchDataFromApi } from "./utils/api";
import { getUrlConfiguration } from "./store/homeSlice";

function App() {
  const dispatch = useDispatch();
  const {url} = useSelector((state) => state.home)
  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = () => {
    fetchDataFromApi("/movie/top_rated").then((res) => {
      dispatch(getUrlConfiguration(res))
    });
  };

  return <div className="App">CINEMAGIC</div>;
}

export default App;
