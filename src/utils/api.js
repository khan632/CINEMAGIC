import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzk4YWU2MmUwODUwMjk3N2IwOGIzZmY3ZjVmZTc4MiIsInN1YiI6IjYzMTJlMGE0MDIzMWYyMDA5MWJmMmNkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RQP-7zs_xs4eQfbrxQYfNnpoJGfSTMxDDmAduRkq5PU";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};