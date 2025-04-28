import React from 'react';
import styles from './papu.module.scss';

export interface papuProps {
  message?: string;
}

export const papu: React.FC<papuProps> = ({ message = 'Hello from papu' }) => {
  return (
    <div className={styles.papu}>
      {message}
    </div>
  );
};

export default papu;
