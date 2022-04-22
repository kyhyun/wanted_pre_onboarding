import React, { useState, useCallback } from "react";
import styles from "./DropDown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function DropDown() {
  const [chooseItem, setChooseItem] = useState("All Symbols");
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);
  const symbols = [
    "All Symbols",
    "ETHUSD.PERP",
    "BCHUSD.PERP",
    "1000SHIBUSD.PERP",
  ];
  // 드랍다운 버튼 클릭
  const onClickDropButton = useCallback(() => {
    setToggle((prevState) => !prevState);
  }, []);
  // 검색 리스트 아이템 클릭
  const onClickSearchItem = useCallback((e) => {
    setChooseItem(e.target.textContent);
  }, []);

  return (
    <div className="wrap">
      <div className="title">DropDown</div>
      <div className={styles.dropContainer}>
        <div className={styles.dropButtonContent}>
          <button className={styles.dropButton} onClick={onClickDropButton}>
            {chooseItem}
          </button>
          <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
        </div>
        {!toggle && (
          <div className={styles.searchContainer}>
            <div className={styles.searchContent}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={styles.faSearch}
              ></FontAwesomeIcon>
              <input
                type="text"
                placeholder="Search Symbol"
                className={styles.searchBar}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className={styles.searchItems}>
              {symbols
                .filter((data) => {
                  if (search === "") {
                    return data;
                  }
                  let isMatch = data
                    .toLowerCase()
                    .includes(search.toLowerCase());
                  return isMatch || data === "All Symbols" ? data : "";
                })
                .map((data, index) => {
                  return (
                    <div
                      key={index}
                      className={styles.searchItem}
                      onClick={onClickSearchItem}
                    >
                      {data}
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DropDown;
