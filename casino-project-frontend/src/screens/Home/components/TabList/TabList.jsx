import React from "react";
import { TabItem } from "../TabItem/TabItem";
import { Link } from "react-router-dom";

export const TabList = () => {
  const casinos = [
    {
      id: "id-97gg9g979hhvkvg7",
      path: "/roulette",
      image:
        "https://images.theconversation.com/files/147757/original/image-20161128-22748-1couruj.jpg?ixlib=rb-1.1.0&rect=0%2C252%2C5616%2C2723&q=45&auto=format&w=1356&h=668&fit=crop",
    },
    {
      id: "id-97gg9gkkvhkvh79g7",
      path: "/slots",
      image:
        "https://store-images.s-microsoft.com/image/apps.64054.14429595829912742.a63cb29a-e94f-436a-b821-b5c5ed61bf78.b704ef15-5de1-4ac4-8b9c-74019268f77f?mode=scale&q=90&h=1080&w=1920",
    },
    {
      id: "id-97gg9gkhkvh979g7",
      image:
        "https://wazdan.com/wp-content/uploads/MagicFruits_icon_600x450_webp90.webp",
      path:'/slotsseven'
    },
    {
      id: "id-97gg9f9f7g979g7",
      image:
        "https://www.cqf.su/img/in-construct.png",
    },
    {
      id: "id-97gg979fg979g7",
      image:
        "https://www.cqf.su/img/in-construct.png",
    },
    {
      id: "id-97ggiufo9g979g7",
      image:
        "https://www.cqf.su/img/in-construct.png",
    },
    {
      id: "id-99uf97gg9g979g7",
      image:
        "https://www.cqf.su/img/in-construct.png",
    },
    {
      id: "id-9708gfkgg9g979g7",
      image:
        "https://www.cqf.su/img/in-construct.png",
    },
  ];
  return (
    <div
      style={{
        width: "100%",
        height: 200,
        display: "flex",
        alignItems: "center",
        overflowX: "scroll",
        boxShadow: "0 0 10px #552b8c",
      }}
    >
      {casinos.map((i) => (
        <Link key={i.id} to={i.path}>
          <TabItem key={i.id} image={i.image} />
        </Link>
      ))}
    </div>
  );
};
