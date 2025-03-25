import styles from './Input.module.css';
import React, { forwardRef } from 'react';
import classNames from 'classnames';

export const Input = forwardRef(({className, error, ...props}, ref) => {
  return (
    <>
      <input
        ref={ref}
        className={classNames(styles.input, className, {
          [styles.inputError]: !!error,
        })}
        {...props}
      />
      {error && <span className={styles.error}>{error}</span>}
    </>
  );
});
