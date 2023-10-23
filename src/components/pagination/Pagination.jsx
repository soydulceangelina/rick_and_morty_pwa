import React from "react";
import styles from './Pagination.module.scss';

export default function Pagination({ prev, next, onPrevious, onNext }) {
  return (
    <nav className={styles.container}>
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
