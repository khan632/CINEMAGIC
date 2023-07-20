import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTcwNTI3NDU5MGYxYzA5ODk5NzI2MTI2N2YwZmFiMSIsInN1YiI6IjY0Mjg4MjlhNjA5NzUwMDBkNThiODY0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F6pmw4hJB2SO-TFHIx8-i7hY2RU02l_8qdtHucnGUbw";

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