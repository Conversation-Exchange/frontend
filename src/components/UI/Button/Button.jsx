import cn from 'classnames';
import styles from './Button.module.scss';

export const Button = ({ className, type, variant, disabled, onClick, children }) => {
  return (
    <button
      className={cn(styles.root, styles[`variant-${variant}`], className)}
      type={type}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  );
};
