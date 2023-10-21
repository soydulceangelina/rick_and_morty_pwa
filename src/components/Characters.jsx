import React from "react";
import Card from "./Card";

export default function Characters({ characters }) {
  return (
    <div className="container">
      <main className="grid">
        {characters.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </main>
    </div>
  );
}
