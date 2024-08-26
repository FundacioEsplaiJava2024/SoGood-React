import axios from 'axios'; 
import bodyProduct from '../interface/bodyProduct';

const API_URL = "http://localhost:8442";



const getAllProducts = (API_URL: string) => {
  return axios.get(`${API_URL}/sogood/packs/`);
};

//getAllProducts()

const getAllProductsByCategory = (API_URL: string, category: string) => {
    return axios.get(`${API_URL}/sogood/packs/${category}`);
  };

//getAllProductsByCategory()

const AddProduct = (API_URL: string, body:bodyProduct) => {
  return axios.post(`${API_URL}/sogood/packs/` + body);
};

//AddProduct()

const EditproductById = (API_URL: string, id:number,body:bodyProduct ) => {
  return axios.put(`${API_URL}/sogood/packs/${id}` + body);
};

//EditproductById()

const deleteProduct = (API_URL: string, id:number) => {
  return axios.delete(`${API_URL}/sogood/packs/${id}`);
};

//deleteProduct()

