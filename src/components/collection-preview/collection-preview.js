import React from "react";

import _ from "lodash";
import "./collection-preview.scss";
import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="collection-preview--title">{_.capitalize(title)}</h1>
    <div className="collection-preview--body">
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
