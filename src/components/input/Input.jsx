import React, { useState, useEffect, useCallback } from "react";
import styles from "./Input.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEyeSlash,
  faEye,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

function Input() {
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [password, setPassword] = useState("password");

  // 이메일 유효성 검사 핸들러
  const confirmValidEmail = useCallback(() => {
    const mailRegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-]+$/;
    const isValid = mailRegExp.test(email);
    if (isValid) {
      setEmailCheck(true);
    } else {
      setEmailCheck(false);
    }
  }, [email]);

  useEffect(() => {
    confirmValidEmail();
  }, [confirmValidEmail]);

  // 비밀번호 블라인드 핸들러
  const onClickIsVisible = () => {
    if (password === "password") return setPassword("text");
    return setPassword("password");
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="wrap">
      <div className="title">Input</div>
      <div className={styles.inputContainer}>
        {/* Email Input Content */}
        <div className={styles.contentTitle}>E-mail</div>
        <div className={styles.inputContent}>
          <input type="email" placeholder="E-mail" onChange={onChangeEmail} />
          <FontAwesomeIcon
            className={`${styles.favicon} ${emailCheck ? styles.valid : ""}`}
            icon={faCircleCheck}
          />
        </div>
        {email && !emailCheck && (
          <div className={styles.invalid}>Invalid e-mail address</div>
        )}

        {/* Password Input Content */}
        <div className={styles.contentTitle}>Password</div>
        <div className={styles.inputContent}>
          <input type={password} placeholder="Password" />
          {password === "password" ? (
            <FontAwesomeIcon
              className={styles.favicon}
              icon={faEyeSlash}
              onClick={onClickIsVisible}
            />
          ) : (
            <FontAwesomeIcon
              className={`${styles.favicon} ${styles.checked}`}
              icon={faEye}
              onClick={onClickIsVisible}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Input;
