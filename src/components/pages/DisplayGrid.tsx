import React from "react";
import styles from "../../css/DisplayGrid.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowRight,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";

const DisplayGrid = () => {
  return (
    <div className={styles.displayGrid}>
      <h1 className={styles.title}>Display Grid</h1>
      <br />
      <h2 className={styles.title}>Default</h2>
      <div className={styles.gridContainer}>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className={styles.gridItem}>
            {index + 1}
          </div>
        ))}
      </div>
      <h2 className={styles.title}>Grid Tamplate Columns</h2>
      <div className={styles.gridContainer}>
        <div className={styles.gridTamplateColumns}>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className={styles.gridItem}>
              {index + 1}
            </div>
          ))}
        </div>
      </div>
      <h2 className={styles.title}>Grid Tamplate Rows</h2>
      <div className={styles.gridContainer}>
        <div className={styles.gridTamplateRows}>
          {Array.from({ length: 35 }).map((_, index) => (
            <div key={index} className={styles.gridItem}>
              {index + 1}
            </div>
          ))}
        </div>
      </div>
      <h2 className={styles.title}>
        Grid Area <FontAwesomeIcon icon={faSquare} />
      </h2>
      <div className={styles.gridArea}>
        <div className={styles.areaHeader}>Header</div>
        <div className={styles.areaNav}>Nav</div>
        <div className={styles.areaAside}>Aside</div>
        <div className={styles.areaSelect}>Select</div>
        <div className={styles.areaSection}>Section</div>
        <div className={styles.areaFooter}>Footer</div>
      </div>
      <h2 className={styles.title}>
        Grid Column <FontAwesomeIcon icon={faArrowDown} />
      </h2>
      <div className={styles.gridColumn}>
        <div className={styles.columnHeader}>Header</div>
        <div className={styles.columnNav}>Nav</div>
        <div className={styles.columnAside}>Aside</div>
        <div className={styles.columnSelect}>Select</div>
        <div className={styles.columnSection}>Section</div>
        <div className={styles.columnFooter}>Footer</div>
      </div>
      <h2 className={styles.title}>
        Grid Row <FontAwesomeIcon icon={faArrowRight} />
      </h2>
      <div className={styles.gridRow}>
        <div className={styles.rowHeader}>Header</div>
        <div className={styles.rowNav}>Nav</div>
        <div className={styles.rowAside}>Aside</div>
        <div className={styles.rowSelect}>Select</div>
        <div className={styles.rowSection}>Section</div>
        <div className={styles.rowFooter}>Footer</div>
      </div>
    </div>
  );
};

export default DisplayGrid;
