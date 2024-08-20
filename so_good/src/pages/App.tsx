import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import axios from 'axios'; 

interface CreateUser{
  name: string,
  username: string,
  email: string,
  password: string
}

function App() {

  const API_URL = "http://localhost:8442";

  const CreateUser = (API_URL: String, body: CreateUser): Promise<any> => {
    return axios.post(`${API_URL}/sogood/users`, body);
  };

  const body_prueba = {
    name: "Juan",
    username: "juanito",
    email: "juanito@gmail.com",
    password: "123456"
  }
  
  CreateUser(API_URL, body_prueba)

  return (
    <>
      <Header navType="app"/>
      <Outlet/>
    </>
  )
}

export default App
