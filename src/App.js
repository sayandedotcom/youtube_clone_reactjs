import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout.component";
import HomePage from "./screens/homepage/homepage.component";
import SearchPage from "./screens/searchpage/searchpage.component";
import Watchpage from "./screens/watchpage/watchpage.component";
import "./App.scss";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      ></Route>
      <Route
        path="/search/:input"
        element={
          <Layout>
            <SearchPage />
          </Layout>
        }
      ></Route>
      <Route
        path="/watch/:watch"
        element={
          <Layout>
            <Watchpage />
          </Layout>
        }
      ></Route>
    </Routes>
  );
}

export default App;
