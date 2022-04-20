import React, { useState } from "react";
import styles from "./Slider.module.css";

function Slider() {
  const [result, setResult] = useState(1);
  const [toggle, setToggle] = useState(false);
  const rangeValues = [1, 25, 50, 75, 100];

  const onChangeInputRange = (e) => {
    setResult(e.target.value);
    setToggle(false);
  };

  const onClickProgressPoint = (e) => {
    setResult(e.target.value);
    setToggle(true);
  };

  return (
    <div className="wrap">
      <div className="title">Slider</div>
      {/* 결과 화면이 보여지는 부분 */}
      <div className={styles.interfaceContainer}>
        <span className={styles.interfaceContent}>{result}</span>
        <span className={styles.interfacePercent}>%</span>
      </div>

      {/* 슬라이드를 조작하는 부분 */}
      <div className={styles.slideContainer}>
        <div className={styles.fillLower} style={{ width: `${result}%` }}></div>
        <input
          type="range"
          name="points"
          min="1"
          max="100"
          step="1"
          list="progressPoint"
          defaultValue="1"
          className={`${styles.slider}`}
          onChange={onChangeInputRange}
        />
        <div className={styles.slideMarks}>
          {rangeValues.map((value, index) => {
            return (
              <div
                key={`_${index}`}
                className={`${styles.slideMark} ${
                  result >= value ? styles.selected : ""
                }`}
              ></div>
            );
          })}
        </div>
      </div>

      {/* 버튼을 조작하는 부분 */}
      <div className={styles.buttonContainer}>
        <datalist id="progressPoint">
          {rangeValues.map((value, index) => {
            return (
              <option
                key={index}
                value={value}
                label={`${value}%`}
                className={
                  toggle && result === `${value}` ? styles.selected : ""
                }
                onClick={onClickProgressPoint}
              ></option>
            );
          })}
        </datalist>
      </div>
    </div>
  );
}

export default Slider;
