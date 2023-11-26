import React from "react";
import './index.css'

export const TabItem = ({ image }) => {
  return (
    <div
      className="tab-item-game"
      style={{
        backgroundImage: `url(${image})`,
        minWidth: 280,
        height: 150,
        cursor: "pointer",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: 'green',
        marginLeft: 70,
        borderRadius: 13,
        
      }}
    />
  );
};
