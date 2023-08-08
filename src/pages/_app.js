import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { createContext, useState } from "react";

export const NavContext = createContext();
const App = ({ Component, pageProps }) => {
  const [navSelected, setNavSelected] = useState("");
  return (
    <NavContext.Provider value={[navSelected, setNavSelected]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NavContext.Provider>
  );
};
export default App;
