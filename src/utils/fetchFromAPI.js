import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {

  url: BASE_URL,
  params: {
    maxResults: "52",
  },
  headers: {
    "X-RapidAPI-Key": '10a27055b2msh07507d0b54b51c2p1766d0jsn494b1f5333c8',
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
