import cn from "classnames";

import styles from "./Button.module.css";

export const Button = ({className, type, variant, size, disabled, onClick, children }) => {

    return (
        <button
            className={cn(
                styles.root,
                styles[`size-${size}`],
                styles[`variant-${variant}`],
                className
            )}
            type={type}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
