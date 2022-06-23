import axios from "axios";

const Axios = axios.create({
    baseURL: "https://my-json-server.typicode.com/benirvingplt/"
});

const GetProducts = 'products/products';
export { Axios, GetProducts };


