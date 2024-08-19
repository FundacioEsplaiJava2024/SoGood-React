import axios from "axios";

const CrearUsuarios = async () => {
    try {
      const body = {
        name: "Manuel",
        username: "Manu_232",
        email: "manu01@gmail.com",
        password: "añsdkfudsbfk"
      };
      const respuesta = await axios.post(
        "http://localhost:8442/sogood/users",
        body
      );
      console.log(respuesta);
    } catch (error) {
      console.log(error);
    }
  };
  //CrearUsuarios();

  const obtenerUsuarios = async () => {
    try {
      const respuesta = await axios.get("http://localhost:8442/sogood/users");
  
      console.log(respuesta);
    } catch (error) {
      console.log(error);
    }
  };
  //obtenerUsuarios();

  const obtenerUsuariosId = async () => {
    try {
      const respuesta = await axios.get("http://localhost:8442/sogood/users/2");
  
      console.log(respuesta);
    } catch (error) {
      console.log(error);
    }
  };
 obtenerUsuariosId();