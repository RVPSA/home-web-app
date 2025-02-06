import { HashRouter, Route, Routes } from "react-router-dom";
import DefauultLayout from "./DefaultLayout";
import { RoutingPath } from "./RoutingPath";

const NavRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<DefauultLayout></DefauultLayout>}>
          {RoutingPath.map((page) => {
            return (
              <>
                <Route path={page.path} element={page.element}></Route>
              </>
            );
          })}
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default NavRoutes;
