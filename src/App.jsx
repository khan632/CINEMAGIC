import react, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";

import { fetchDataFromApi } from "./utils/api";
import { getUrlConfiguration } from "./store/homeSlice";

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from "./pages/home/Home";
import Details from './pages/details/Details'
import SearchResult from './pages/searchDetail/SearchDetail'
import Explore from './pages/explore/Explore'
import PageNotFound from './pages/404/PageNotFound'

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

  return(
    <BrowserRouter>
      <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:mediaType/:id" element={<Details />} />
                <Route path="/search/:query" element={<SearchResult />} />
                <Route path="/explore/:mediaType" element={<Explore />} />
                <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
