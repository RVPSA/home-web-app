import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefauultLayout from "./DefaultLayout";
import { RoutingPath } from "./RoutingPath";

const NavRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefauultLayout></DefauultLayout>}>
          {RoutingPath.map((page, index) => {
            return (
              <>
                <Route path={page.path} element={page.element}></Route>
              </>
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default NavRoutes;
