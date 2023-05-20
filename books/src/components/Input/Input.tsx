import React, { memo } from "react";
import cn from "classnames";

import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: boolean;
  description?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  description,
  ...inputProps
}) => {
  return (
    <div className={styles.wrapper}>
      <label
        className={cn(styles.label, { [styles.error]: error })}
        htmlFor={inputProps.id}
      >
        {label}
      </label>
      <input
        {...inputProps}
        className={cn(
          styles.input,
          { [styles.error]: error },
          inputProps.className
        )}
      />
      {!!description && (
        <p className={cn(styles.description, { [styles.error]: error })}>
          {description}
        </p>
      )}
    </div>
  );
};

export default memo(Input);
