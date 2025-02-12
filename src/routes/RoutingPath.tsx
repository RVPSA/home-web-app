import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import Homepage from "../pages/HomePage";

//Details for admin Login DropDown
export const RoutingPath: any[] = [
  { path: "/", element: <Homepage></Homepage> },
  { path: "/gallery", element: <Gallery></Gallery> },
  { path: "/contact", element: <Contact></Contact> },
];
