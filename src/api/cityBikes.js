import axios from "axios";

const URL = "http://api.citybik.es/v2";

export default axios.create({
  baseURL: URL,
});
