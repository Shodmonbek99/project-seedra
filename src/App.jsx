import React from "react";
import Novbar from "./components/Novbar";
import HeroProduct from "./components/HeroProduct";
import ProductList from "./components/ProductList";
import ProductGrid from "./components/ProductGrid";
import OurBlog from "./components/OurBlog";
import Client from "./components/Client";
import Help from "./components/Help";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Novbar />
      <div className="containerH  font-['Lexend']">
        <HeroProduct />
        <ProductList />
        <ProductGrid />
        <OurBlog />
        <Client />
        <Help />
      </div>
      <Footer />
    </>
  );
}

export default App;
