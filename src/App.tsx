// React Stuff
import { JSX, useState } from "react";

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

// Context
import { AppContext } from "./context/store";

// Interface
import { Card } from "./@types/api.type";

const App: React.FC = (): JSX.Element => {
  const [card, setCard] = useState<Card[]>([]);

  return (
    <AppContext.Provider value={{ card, setCard }}>
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
    </AppContext.Provider>
  );
};

export default App;
