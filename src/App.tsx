import { Component, createEffect, createSignal, onMount } from "solid-js";
import {useRoutes } from 'solid-app-router'
import anime from 'animejs';
import { createViewPort } from "./hooks/createViewPort";
import { createDocumentTitle } from "./hooks/createDocumentTitle";
import { Routes } from "./routes/routes";
import axios from 'axios'
import MenuButton from "./components/buttons/MenuButton";
import { Divider } from "./components/containers/containers";

const App: Component = () => {
  const Router = useRoutes(Routes)
  let myRef;


  return (
    <main>
      <MenuButton title={"<AG/>"} />
      <Router/>
    </main>
  );
};

export default App;
