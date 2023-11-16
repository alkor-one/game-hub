import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/apix",
  params: {
    key: "8c694d83ef4c444aaf9fbaa5e1d02aa8",
  },
});
