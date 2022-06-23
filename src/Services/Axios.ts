import axios from "axios";

const Axios = axios.create({
    baseURL: "https://my-json-server.typicode.com/benirvingplt/",
    headers: {
      'Content-Type': 'application/json',
    },
  });

export { Axios };


