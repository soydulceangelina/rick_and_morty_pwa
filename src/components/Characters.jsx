import React from "react";
// components
import Card from "./Card";
import Pagination from "./Pagination";

export default function Characters({ characters, fetch, info }) {
  const handleNextPage = () => {
    fetch(info.next);
    window.scrollTo(0, 0);
  };

  const handlePreviousPage = () => {
    fetch(info.prev);
    window.scrollTo(0, 0);
  };
  return (
    <div className="characters-container">
      <h2>
        Characters
      </h2>
      <div className="grid">
        {characters.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={handlePreviousPage}
        onNext={handleNextPage}
      />
    </div>
  );
}
