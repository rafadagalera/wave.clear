import Footer from "./components/footer";
import Header from "./components/header";
import { Outlet } from 'react-router-dom'


export default function App() {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className=" md:h-screen md:w-1/12 md:max-w-[110px] md:min-w-[110px]">
          <Header />
        </div>
        <div className="md:flex md:m-0 md:h-screen md:w-11/12">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  )
}