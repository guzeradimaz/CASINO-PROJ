import React from "react";
import { TabList } from "./components/TabList/TabList";
import { Header } from "../../components/Header/Header";

export const Home = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgb(17,17,17)",
      }}
    >
      <Header />
      <TabList />
    </div>
  );
};
