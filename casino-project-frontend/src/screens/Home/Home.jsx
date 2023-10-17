import React from "react";
import { TabList } from "./components/TabList/TabList";
import { Header } from "../../components/Header/Header";
import { Infos } from "./components/Infos/Infos";
import { Overview } from "./components/Overview/Overview";

export const Home = () => {
  return (
    <div
      style={{
        width: "100vw",
        backgroundColor: "rgb(17,17,17)",
      }}
    >
      <Header />
      <TabList />
      <Overview />
      <Infos />
    </div>
  );
};
