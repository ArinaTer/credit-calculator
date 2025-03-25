import classNames from 'classnames';

import styles from './Button.module.css';

export const Button = ({
  className,
  variant = 'primary || outline || text || close',
  children,
  ...props
}) => {
  return (
    <button
      className={classNames(styles.button, styles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
