import axios from "axios";

const baseUrl = "http://localhost:8442/sogood";

const getAllProducts = async () =>  {
  try {
    const response = await axios.get(`${baseUrl}/packs/`);
    return response;

  } catch (error) {
    console.log(error);
  }
};
export default getAllProducts;

const getProductsById = async (id: number) => {
    try {
      const response = await axios.get(`${baseUrl}/packs/${id}`);
      return response;

    } catch (error) {
      console.log(error);
    }
  };

  const getProductsByCategory = async (category:string) => {
    try {
      const response = await axios.get(`${baseUrl}/packs/category/${category}`);
      return response;

    } catch (error) {
      console.log(error);
    }
  };
