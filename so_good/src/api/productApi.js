import axios from "axios";

const obtenerProductos = async () => {
  try {
    const respuesta = await axios.get("http://localhost:8442/sogood/packs");

    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
};
//obtenerProductos();

const obtenerProductosId = async () => {
  try {
    const respuesta = await axios.get("http://localhost:8442/sogood/packs/306");

    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
};
//obtenerProductosId();

const EditarProductosId = async () => {
  try {
    const body = {
      productName: "SOGo",
      description: "paseando",
      enterpriseUser: "jaime",
      category: "pizza",
      quantity: "1034",
      direction: "c/asdjd d",
      price: "1343",
    };
    const respuesta = await axios.put(
      "http://localhost:8442/sogood/packs/306",
      body
    );

    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
};
//EditarProductosId();
