import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../features/Home/pages/HomePage";
import MenuPage from "../features/Menu/pages/MenuPage";
import AboutPage from "../features/About/pages/AboutPage";
import ContactPage from "../features/Contact/pages/ContactPage";
import type { JSX } from "react";

interface RouteConfig {
  path: string;
  element: JSX.Element;
}

export default function AppRouter() {
  const routeList: RouteConfig[] = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/menu",
      element: <MenuPage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routeList.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
