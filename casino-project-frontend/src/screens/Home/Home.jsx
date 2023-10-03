import React from "react";
import { TabList } from "./components/TabList/TabList";

export const Home = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgb(17,17,17)",
        paddingTop: 60,
      }}
    >
      <TabList />
    </div>
  );
};
