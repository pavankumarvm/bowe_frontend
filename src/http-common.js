import axios from "axios";

export default create.axios({
  baseURL: "https://localhost:8000/",
  headers: {
    "Content-type": "application/json",
  },
});
