import React, { useState } from "react";
import styles from "./Tab.module.css";
function Tab() {
  const tabs = ["감자", "고구마", "카레라이스"];
  const [coordinateValue, setCoordinateValue] = useState(0);
  const onChangeList = (e) => {
    // 감자 리스트를 선택한 경우
    if (e.target.textContent === tabs[0]) {
      setCoordinateValue(0);
    }
    // 고구마를 선택한 경우
    if (e.target.textContent === tabs[1]) {
      setCoordinateValue(100);
    }
    // 카레라이스를 선택한 경우
    if (e.target.textContent === tabs[2]) {
      setCoordinateValue(200);
    }
  };
  return (
    <div className="wrap">
      <h3 className="title">Tab</h3>
      <ul className={styles.tabList}>
        {tabs.map((tab, index) => {
          return (
            <li key={index} className={styles.tab} onClick={onChangeList}>
              {tab}
            </li>
          );
        })}
      </ul>
      <div className={styles.slideContainer}>
        <div
          className={styles.slider}
          style={{ transform: `translateX(${coordinateValue}px)` }}
        ></div>
      </div>
    </div>
  );
}

export default Tab;
