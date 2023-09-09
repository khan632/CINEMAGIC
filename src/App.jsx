import react, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";

import { fetchDataFromApi } from "./utils/api";
import { getUrlConfiguration, getGenres } from "./store/homeSlice";

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
    fetchApiConfig();
    getAllGenres();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {

      const url = {
        backdrop: res.images.secure_base_url + 'original',
        poster: res.images.secure_base_url + 'original',
        profile: res.images.secure_base_url + 'original',
      }
      dispatch(getUrlConfiguration(url))
    });
  };

  const getAllGenres = async () => {
    let promises = [];
    let endpoints = ['tv', 'movie'];
    let apiGenres = {};

    endpoints.forEach((url) => {
        promises.push(fetchDataFromApi(`/genre/${url}/list`));
    })

    const genreData = await Promise.all(promises);

    genreData.map(({ genres }) => {
      return genres.map((item) => (apiGenres[item.id] = item));
    });

    dispatch(getGenres(apiGenres))

  }


  return(
    <BrowserRouter>
      <Header />
      <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:mediaType/:id" element={<Details />} />
                <Route path="/search/:query" element={<SearchResult />} />
                <Route path="/explore/:mediaType" element={<Explore />} />
                <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
