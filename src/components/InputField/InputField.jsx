import React from "react";
import styles from "./InputField.module.css";

const InputField = ({ label, type, name, value, onChange, required = false }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} className={styles.input} required={required}/>
    </div>
  );
}

export default InputField;