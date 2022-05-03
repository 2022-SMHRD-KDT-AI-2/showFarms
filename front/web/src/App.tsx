import React from "react";
import Header from "./components/header";
import { AppContainer } from "./styles/layout";
import loadable from "@loadable/component";
import { Routes, Route } from "react-router";

const Home = loadable(() => import("./pages/home"));
const Login = loadable(() => import("./pages/login"));
const Post = loadable(() => import("./pages/post"));
const Write = loadable(() => import("./pages/write"));
const MyPages = loadable(() => import("./pages/myPages"));
const Movies = loadable(() => import("./pages/movies"));
const Map = loadable(() => import("./pages/map"));

function App() {
  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/map"} element={<Map />} />
        <Route path={"/post:postId"} element={<Post />} />
        <Route path={"/write:userId"} element={<Write />} />
        <Route path={"/mypages/:userType"} element={<MyPages />} />
        <Route path={"/movies"} element={<Movies />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
