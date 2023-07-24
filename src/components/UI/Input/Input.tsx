import cn from 'classnames';

import styles from './Input.module.scss';

import type { ChangeEvent } from 'react';

type InputProps<T> = {
  className?: string;
  onValue?: (value: T | string) => void;
  value: T;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  hasError?: boolean;
  error?: string;
  hint?: string;
};

export const Input = <T extends string | number>({
  className,
  onValue,
  value,
  name,
  type,
  placeholder,
  required,
  hasError,
  error,
  hint,
}: InputProps<T>) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    onValue?.(value as T);
    console.log(value, name);
  };

  return (
    <>
      <input
        className={cn(
          styles.input,
          {
            [styles.hasError]: hasError,
          },
          className,
        )}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={handleChange}
      />
      {hasError ? (
        <span className={styles.error}>{error}</span>
      ) : (
        hint && <span className={styles.hint}>{hint}</span>
      )}
    </>
  );
};
