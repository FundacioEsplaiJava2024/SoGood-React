import axios from 'axios'; 

const API_URL = "http://localhost:8442";
 
  const CreateUser = (API_URL, body) => {
    return axios.post(`${API_URL}/sogood/users`, body);
  };

  const body_prueba = {
    name: "Juan",
    username: "juanito",
    email: "juanito@gmail.com",
    password: "123456"
  }
  
  //CreateUser(API_URL, body_prueba)