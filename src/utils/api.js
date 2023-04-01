import axios from "axios";
import Spinner from "../stylishComponent/Spinner";

const BASE_URL = "https://api.themoviedb.org/3";
const API_TOKEN = import.meta.env.IMDB_TOKEN;

const header = {
  Authorization: "bearer " + API_TOKEN,
};

export const fetchData = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, { header, params });
    return data;
  } catch (err) {
    console.log(err);
    <div>
      {" "}
      <Spinner /> Something went wrong
    </div>;
  }
};
