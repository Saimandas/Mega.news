import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import MobileHeader from "./components/mobileHeader"



const App = () => {
  return (
    <>
    <MobileHeader/>
    <Outlet/>
    </>
  )
}

export default App