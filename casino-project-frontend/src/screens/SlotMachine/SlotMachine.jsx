import React, { useState, useEffect } from 'react';
const slotReelImage = 'https://assets.codepen.io/439000/slotreel.webp' // Import the local image

export const SlotMachine = () => {
  const [indexes, setIndexes] = useState([0, 0, 0]);

  const iconMap = ["banana", "seven", "cherry", "plum", "orange", "bell", "bar", "lemon", "melon"];
  const icon_width = 79;
  const icon_height = 79;
  const num_icons = 9;
  const time_per_icon = 100;

  const roll = (reel, offset = 0) => {
    const delta = (offset + 2) * num_icons + Math.round(Math.random() * num_icons);
    return new Promise((resolve, reject) => {
      const style = window.getComputedStyle(reel);
      const backgroundPositionY = parseFloat(style.getPropertyValue("background-position-y"));
      const targetBackgroundPositionY = backgroundPositionY + delta * icon_height;
      const normTargetBackgroundPositionY = targetBackgroundPositionY % (num_icons * icon_height);

      setTimeout(() => {
        reel.style.transition = `background-position-y ${(8 + 1 * delta) * time_per_icon}ms cubic-bezier(.41,-0.01,.63,1.09)`;
        reel.style.backgroundPositionY = `${backgroundPositionY + delta * icon_height}px`;
      }, offset * 150);

      setTimeout(() => {
        reel.style.transition = `none`;
        reel.style.backgroundPositionY = `${normTargetBackgroundPositionY}px`;
        resolve(delta % num_icons);
      }, (8 + 1 * delta) * time_per_icon + offset * 150);
    });
  };

  const rollAll = () => {
    const reelsList = document.querySelectorAll('.reel');
    const promises = [...reelsList].map((reel, i) => roll(reel, i));

    Promise.all(promises)
      .then((deltas) => {
        const newIndexes = indexes.map((value, i) => (value + deltas[i]) % num_icons);
        setIndexes(newIndexes);

        if (newIndexes[0] === newIndexes[1] || newIndexes[1] === newIndexes[2]) {
          const winCls = newIndexes[0] === newIndexes[2] ? "win2" : "win1";
          document.querySelector(".slots").classList.add(winCls);
          setTimeout(() => document.querySelector(".slots").classList.remove(winCls), 2000);
        }

        setTimeout(rollAll, 3000);
      });
  };

  useEffect(() => {
    setTimeout(rollAll, 1000);
  }, []);

  return (
    <div className="slots">
      {indexes.map((index, i) => (
        <div className="reel" key={i} style={{ backgroundImage: `url(${slotReelImage})` }}></div>
      ))}
      <p>Step-by-step tutorial for this pen at <a target="_blank" href="https://youtu.be/boI2B4Gpp34">YouTube</a></p>
    </div>
  );
};
