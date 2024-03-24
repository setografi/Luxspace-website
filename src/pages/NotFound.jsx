import React from "react";
import Header from "../parts/Header";
import SiteMap from "../parts/SiteMap";
import Footer from "../parts/Footer";
import PageError from "../parts/PageError";

function NotFound() {
  return (
    <>
      <Header theme="black" />
      <PageError />
      <SiteMap />
      <Footer />
    </>
  );
}
export default NotFound;
