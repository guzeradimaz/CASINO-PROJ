import React from "react";

const payments = [
  {
    img: "https://pm.by/img/imageblock/10049.png?v=2023-08-10T09:06:01.823",
  },
  {
    img: "https://pm.by/img/imageblock/10050.png?v=2023-08-10T09:06:15.808",
  },
  {
    img: "https://pm.by/img/imageblock/10051.png?v=2023-08-10T09:06:30.427",
  },
  {
    img: "https://pm.by/img/imageblock/10052.png?v=2023-08-10T09:06:44.497",
  },
  {
    img: "https://pm.by/img/imageblock/10053.png?v=2023-08-10T09:06:54.293",
  },
  {
    img: "https://pm.by/img/imageblock/10055.png?v=2023-09-19T08:57:55.246",
  },
  {
    img: "https://pm.by/img/imageblock/10048.png?v=2023-08-10T09:07:41.351",
  },
  {
    img: "https://pm.by/img/imageblock/10056.png?v=2023-08-10T09:07:53.123",
  },
  {
    img: "https://pm.by/img/imageblock/10057.png?v=2023-08-10T09:08:04.399",
  },
];

export const Infos = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "100px 0",
        // position: "absolute",
        // bottom: 0,
        // left: 0,
      }}
    >
      <div>
        <div
          style={{
            width: "100%",
            height: 50,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div
            style={{ width: "30%", height: 1, backgroundColor: "#eaeaea" }}
          />
          <p style={{ color: "#eaeaea", fontSize: 12 }}>платежные методы</p>
          <div
            style={{ width: "30%", height: 1, backgroundColor: "#eaeaea" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {payments.map((i) => {
            const id = Math.random().toString();
            return (
              <img
                style={{
                  maxWidth: 100,
                  margin: "0 20px",
                }}
                src={i.img}
                key={id}
                alt={`payment-${id}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
