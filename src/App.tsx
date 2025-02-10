// React Stuff
import { JSX } from "react";

// React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Material
import { StyleSheetManager, ThemeProvider } from "styled-components";
import { CssBaseline } from "@mui/material";
import { theme } from "./styles/material";
import rtlPlugin from "stylis-plugin-rtl";

// Components
import { InitialPage } from "./Pages/initial";
import { OrderPage } from "./Pages/order";
import { Layout } from "./components/Layout/layout";

const App: React.FC = (): JSX.Element => {
  return (
    <StyleSheetManager stylisPlugins={[rtlPlugin]}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<InitialPage />}></Route>
              <Route path='/order' element={<OrderPage />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StyleSheetManager>
  );
};

export default App;
