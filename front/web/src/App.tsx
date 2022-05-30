import React from "react";
import { AppContainer } from "./styles/layout";
import loadable from "@loadable/component";
import { Route, Routes } from "react-router";

const Home = loadable(() => import("./pages/home"));
const Movies = loadable(() => import("./pages/movies"));
const KakaoMap = loadable(() => import("./pages/map"));
const Start = loadable(() => import("./pages/start"));

function App() {
  return (
    <>
      <AppContainer>
        <Routes>
          <Route path={"/"} element={<Start />} />
          <Route path={"/main/:page"} element={<Home />} />
          <Route path={"/map"} element={<KakaoMap />} />
          <Route path={"/movies/:postid"} element={<Movies />} />
        </Routes>
      </AppContainer>
    </>
  );
}

export default App;
//<Header />
