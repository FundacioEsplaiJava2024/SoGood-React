import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Forms() {
  
  return (
    <>
      <Header navType="forms"/>
      <Outlet/>
    </>
  )
}
export default Forms;
