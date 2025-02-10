// React Stuff
import { JSX } from "react";

// React Router Dom
import { Outlet } from "react-router-dom";

// Components
import { Header } from "./Header/header";
import { Footer } from "./Footer/footer";

export const Layout: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
