import React from "react";

export default function Pagination({ prev, next, onPrevious, onNext }) {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };
  return (
    <nav>
      <ul>
        {prev && (
          <li>
            <button onClick={onPrevious}>previous</button>
          </li>
        )}
      </ul>
      <ul>
        {next && (
          <li>
            <button onClick={onNext}>next</button>
          </li>
        )}
      </ul>
    </nav>
  );
}
