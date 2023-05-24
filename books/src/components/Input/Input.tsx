import React, { memo } from "react";
import cn from "classnames";

import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  helpText?: string;
  classNames?: {
    wrapper?: string;
  };
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  name,
  value,
  placeholder,
  onChange,
  label,
  error = false,
  helpText,
  classNames,
}) => {
  console.log("render input: ", name);
  return (
    <div className={cn(styles.wrapper, classNames?.wrapper)}>
      {!!label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={cn(styles.input, { [styles.inputError]: error })}
      />
      {!!helpText && (
        <span
          className={cn(styles.helpText, { [styles.helpTextError]: error })}
        >
          {helpText}
        </span>
      )}
    </div>
  );
};

export default memo(Input);
