import classNames from 'classnames';
import styles from './RadioButton.module.css';

export const RadioButton = ({ name, label, value, isActive, ...props }) => {
  const { ref, ...rest } = props;

  return (
    <label
      className={classNames(styles.radioLabel, {
        [styles.active]: isActive,
      })}
    >
      <input
        type="radio"
        className={styles.radio}
        value={value}
        name={name}
        ref={ref}
        {...rest}
      />
      <span className={styles.radioText}>{label}</span>
    </label>
  );
};
