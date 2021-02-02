import axios from "axios";

const URL = "https://api.citybik.es/v2";

export default axios.create({
  baseURL: URL,
});
