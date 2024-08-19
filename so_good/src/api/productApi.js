import axios from "axios";


const CrearProductos = async () => {
  try {
    const body = {
      productName: "fesdjsd",
      description: "paseando",
      enterpriseUser: "jaime",
      category: "pizza",
      quantity: "1034",
      direction: "c/asdjd d",
      price: "1343",
    };
    const respuesta = await axios.post(
      "http://localhost:8442/sogood/packs",
      body
    );
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
};
//CrearProductos();

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
    const respuesta = await axios.get("http://localhost:8442/sogood/packs/352");

    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
};
//obtenerProductosId();

const EditarProductosId = async () => {
  try {
    const body = {
      productName: "cuerno",
      description: "paseando",
      enterpriseUser: "jaime",
      category: "guacamole",
      quantity: "1034",
      direction: "c/asdjd d",
      price: "1343",
    };
    const respuesta = await axios.put(
      "http://localhost:8442/sogood/packs/402",
      body
    );

    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
};
//EditarProductosId();
const EliminarProducto = async () => {
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
    const respuesta = await axios.delete(
      "http://localhost:8442/sogood/packs/352"
    );
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
};
//EliminarProducto();

const ObtenerCategorias = async () => {
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
    const respuesta = await axios.get(
      "http://localhost:8442/sogood/packs/category/guacamole"
    );
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
};
ObtenerCategorias();
