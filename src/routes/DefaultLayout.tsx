import { Outlet } from "react-router-dom";
import NavbarNew from "../components/NavbarNew";
import Footer from "../components/Footer";

const DefauultLayout = () => {
  return (
    <>
      <div className="font-serif min-h-screen">
        <NavbarNew></NavbarNew>
        <div>
          <Outlet></Outlet>
        </div>

        <Footer></Footer>
      </div>

      {/* <div className="bg-gradient-to-t from-lima-400 to-lima-200 min-h-screen min-w-screen flex">
      <Navbar></Navbar>
      
      <div className="h-[calc(100%-150px)] mt-[150px] w-full">
        <Outlet></Outlet>
      </div>
    </div> */}
    </>
  );
};

export default DefauultLayout;
