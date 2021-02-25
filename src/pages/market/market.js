import React, { useState, useEffect } from "react";
import MARKET_DATA from "./market-data";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import "./market.scss";

const MarketPage = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    setCollections(MARKET_DATA);
  }, []);

  return (
    <section className="market-page">
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </section>
  );
};

export default MarketPage;
