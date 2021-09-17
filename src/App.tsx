import { Component, createSignal, onMount } from "solid-js";
import {useRoutes } from 'solid-app-router'
import { createViewPort } from "./hooks/createViewPort";
import { createDocumentTitle } from "./hooks/createDocumentTitle";
import { Routes } from "./routes/routes";
import axios from 'axios'
import MenuButton from "./components/buttons/MenuButton";
import { Divider } from "./components/containers/containers";

const App: Component = () => {
  const Router = useRoutes(Routes)
  const viewPort = createViewPort();
  const [fetchedData, setFetchedData] = createSignal<any>([]);



  return (
    <main>
      <MenuButton title={"<AG/>"} />
      <Router/>
    </main>
  );
};

export default App;
