import axios from "axios";
import unsplash_access_key from "./unsplash_access_key.json";

export default axios.create({
  baseUrl: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${unsplash_access_key.key}`,
  },
});
