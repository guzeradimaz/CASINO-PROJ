import React from "react";
import { TabItem } from "../TabItem/TabItem";

export const TabList = () => {
  const casinos = [
    {
      id: "id-97gg9g979hhvkvg7",
      path: "/CASINO-PROJ/roulette",
      image:
        "https://images.theconversation.com/files/147757/original/image-20161128-22748-1couruj.jpg?ixlib=rb-1.1.0&rect=0%2C252%2C5616%2C2723&q=45&auto=format&w=1356&h=668&fit=crop",
    },
    {
      id: "id-97gg9gkkvhkvh79g7",
      image:
        "https://cdn-v2.gamzix.com/coin-win-hold-the-spin/v1.1.34/resources/preloader/mobile/preloader_bg_1080p.jpg?version=1.1.34",
    },
    {
      id: "id-97gg9gkhkvh979g7",
      image:
        "https://cdn-v2.gamzix.com/coin-win-hold-the-spin/v1.1.34/resources/preloader/mobile/preloader_bg_1080p.jpg?version=1.1.34",
    },
    {
      id: "id-97gg9f9f7g979g7",
      image:
        "https://cdn-v2.gamzix.com/coin-win-hold-the-spin/v1.1.34/resources/preloader/mobile/preloader_bg_1080p.jpg?version=1.1.34",
    },
    {
      id: "id-97gg979fg979g7",
      image:
        "https://cdn-v2.gamzix.com/coin-win-hold-the-spin/v1.1.34/resources/preloader/mobile/preloader_bg_1080p.jpg?version=1.1.34",
    },
    {
      id: "id-97ggiufo9g979g7",
      image:
        "https://cdn-v2.gamzix.com/coin-win-hold-the-spin/v1.1.34/resources/preloader/mobile/preloader_bg_1080p.jpg?version=1.1.34",
    },
    {
      id: "id-99uf97gg9g979g7",
      image:
        "https://cdn-v2.gamzix.com/coin-win-hold-the-spin/v1.1.34/resources/preloader/mobile/preloader_bg_1080p.jpg?version=1.1.34",
    },
    {
      id: "id-9708gfkgg9g979g7",
      image:
        "https://cdn-v2.gamzix.com/coin-win-hold-the-spin/v1.1.34/resources/preloader/mobile/preloader_bg_1080p.jpg?version=1.1.34",
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
        <a href={i.path}>
          <TabItem key={i.id} image={i.image} />
        </a>
      ))}
    </div>
  );
};
