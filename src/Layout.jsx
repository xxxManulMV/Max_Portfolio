import {Outlet} from "react-router-dom";
import Header from "./Common/Header/Header";

export default function Layout(){
  return(
    <>
      <Header />
      <Outlet />
    </>
  )
}