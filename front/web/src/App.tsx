import React from "react";
import Header from "./components/header";
import { AppContainer } from "./styles/layout";
import loadable from "@loadable/component";
import { Routes, Route } from "react-router";
import { blackAndWhite, agriculture } from "./datas/color";
import { ColorDiv } from "./styles/common";

const Home = loadable(() => import("./pages/home"));
const Login = loadable(() => import("./pages/login"));
const Post = loadable(() => import("./pages/post"));
const Write = loadable(() => import("./pages/write"));
const Pages = loadable(() => import("./pages/Pages"));
const Movies = loadable(() => import("./pages/movies"));
const KakaoMap = loadable(() => import("./pages/map"));

const ColorPalette = () => {
  return (
    <>
      {blackAndWhite.concat(agriculture).map((item, index) => {
        return <ColorDiv key={index} color={item} />;
      })}
    </>
  );
};

function App() {
  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/map"} element={<KakaoMap />} />
        <Route path={"/post"} element={<Post />} />
        <Route path={"/write"} element={<Write />} />
        <Route path={"/pages"} element={<Pages />} />
        <Route path={"/movies"} element={<Movies />} />
        <Route path={"/color"} element={<ColorPalette />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
