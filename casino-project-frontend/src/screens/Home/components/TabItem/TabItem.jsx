import React from "react";

export const TabItem = ({ image }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        minWidth: 220,
        height: 110,
        cursor: "pointer",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: 'green',
        marginLeft: 30,
        borderRadius: 13,
        
      }}
    />
  );
};
