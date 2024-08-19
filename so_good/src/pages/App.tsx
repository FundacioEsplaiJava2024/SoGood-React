import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function App() {
  
  return (
    <>
      <Header navType="app"/>
      <Outlet/>
    </>
  )
}

export default App
