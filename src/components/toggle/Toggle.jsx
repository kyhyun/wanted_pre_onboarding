import React, { useState } from "react";
import styles from "./Toggle.module.css";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  // 토글 버튼의 옵션 상태를 변경한다.
  const onChangeList = (e) => {
    setToggle((prevState) => !prevState);
  };
  return (
    <div className="wrap">
      <h2 className="title">Toggle</h2>
      <div className={styles.contents}>
        <div
          className={`${styles.slider} ${!toggle ? "" : styles.selected}`}
        ></div>
        <button
          className={styles.item}
          onClick={!toggle ? undefined : onChangeList}
        >
          기본
        </button>
        <button
          className={styles.item}
          onClick={!toggle ? onChangeList : undefined}
        >
          상세
        </button>
      </div>
    </div>
  );
};

export default Toggle;
