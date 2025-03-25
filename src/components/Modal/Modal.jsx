import {useRef} from 'react';
import {useOnClickOutside} from 'usehooks-ts';
import {Button} from '../Button/Button';
import styles from './Modal.module.css';
import {ReactComponent as CloseIcon} from '../../assets/images/icons/close.svg';

export const Modal = ({children, title, isOpen, onClose, ...props}) => {
  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    onClose?.();
  });

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay} {...props}>
      <div className={styles.modal} ref={ref}>
        <header className={styles.header}>
          {title}
          <Button
            className={styles.closeButton}
            onClick={onClose}
            variant="close"
          >
            <CloseIcon />
          </Button>
        </header>
        {children}
      </div>
    </div>
  );
};
