import React, { useState, useEffect } from "react";
import "./directory.scss";
import MenuItem from "../menu-item/menu-item";
import Racks from "../../assets/rack.jpg";
import Beddings from "../../assets/beddings.jpg";
import Rats from "../../assets/rat.jpg";
import BallPythons from "../../assets/ballpython1.jpg";
import BallPythonFarms from "../../assets/farm.jpg";

const Directory = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    setSections([
      {
        title: "Racks",
        imageUrl: Racks,
        id: 1,
      },
      {
        title: "Beddings",
        imageUrl: Beddings,
        id: 2,
      },
      {
        title: "Rats",
        imageUrl: Rats,
        id: 3,
      },
      {
        title: "Ball Pythons",
        imageUrl: BallPythons,
        id: 4,
        size: "large",
      },
      {
        title: "Ball Python Farms",
        imageUrl: BallPythonFarms,
        id: 5,
        size: "large",
      },
    ]);
  }, []);

  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
};

export default Directory;
