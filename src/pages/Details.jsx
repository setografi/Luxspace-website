import React from "react";
import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumb/index";
import Clients from "../parts/Clients";
import SiteMap from "../parts/SiteMap";
import Footer from "../parts/Footer";

function App() {
  return (
    <>
      <Header />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/91231", name: "Office Room" },
          { url: "/categories/91231/products/7888", name: "Details" },
        ]}
      />
      <Clients />
      <SiteMap />
      <Footer />
    </>
  );
}

export default App;
