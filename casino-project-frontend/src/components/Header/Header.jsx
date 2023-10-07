import React from "react";
import Back from "./assets/banner.png";
import "./index.css";

export const Header = () => {
  return (
    <div
      style={{
        width: "100%",
        height: 200,
        marginBottom: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${Back})`,
          height: 100,
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        style={{
          height: 100,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <h1
          style={{
            fontSize: 32,
            color: "#fff",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Casino
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            minWidth: 450,
            justifyContent: "space-between",
          }}
        >
          <p style={{ color: "#fff", fontSize: 24 }}>Balance</p>
          <p style={{ color: "gold", fontSize: 24 }}>$ 999.99</p>
          <button className="button-header">Вход</button>
        </div>
      </div>
    </div>
  );
};