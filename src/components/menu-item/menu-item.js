import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.scss";
import _ from "lodash";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} directory-menu__item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
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

export default withRouter(MenuItem);
