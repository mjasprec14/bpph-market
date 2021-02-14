import React from "react";
import "./menu-item.scss";
import _ from "lodash";

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} directory-menu__item`}>
    <div
      className="directory-menu__item--background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="directory-menu__item--content">
      <h1 className="directory-menu__item--content-title">
        {_.upperCase(title)}
      </h1>
      <span className="directory-menu__item--content-subtitle">SHOP</span>
    </div>
  </div>
);

export default MenuItem;
