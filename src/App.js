import React from "react";
import BannerMain from "./components/BannerMain";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

import data from "./data/dados_iniciais.json";

function App() {
  return (
    <div style={{ backgroundColor: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={data.categorias[0].videos[0].titulo}
        url={data.categorias[0].videos[0].url}
        videoDescription={"O que é Front End ..."}
      />

      <Carousel ignoreFirstVideo category={data.categorias[0]} />
      <Carousel ignoreFirstVideo category={data.categorias[1]} />
      <Carousel ignoreFirstVideo category={data.categorias[2]} />
      <Carousel ignoreFirstVideo category={data.categorias[3]} />
      <Carousel ignoreFirstVideo category={data.categorias[4]} />
      <Carousel ignoreFirstVideo category={data.categorias[5]} />

      <Footer />
    </div>
  );
}

export default App;
