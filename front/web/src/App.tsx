import React from "react";
import { AppContainer } from "./styles/layout";
import loadable from "@loadable/component";
import { Routes, Route } from "react-router";

const Home = loadable(() => import("./pages/home"));
const Post = loadable(() => import("./pages/post"));
const Write = loadable(() => import("./pages/write"));
const Pages = loadable(() => import("./pages/Pages"));
const Movies = loadable(() => import("./pages/movies"));
const KakaoMap = loadable(() => import("./pages/map"));
const Start = loadable(() => import("./pages/start"));

function App() {
  return (
    <>
      <AppContainer>
        <Routes>
          <Route path={"/"} element={<Start />} />
          <Route path={"/main"} element={<Home />} />
          <Route path={"/map"} element={<KakaoMap />} />
          <Route path={"/post"} element={<Post />} />
          <Route path={"/write"} element={<Write />} />
          <Route path={"/pages"} element={<Pages />} />
          <Route path={"/movies"} element={<Movies />} />
        </Routes>
      </AppContainer>
    </>
  );
}

export default App;
//<Header />
