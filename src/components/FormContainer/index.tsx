import { ReactElement } from 'react';
import styles from './FormContainer.module.scss';

type FormContainerType = {
  title: string;
  children: ReactElement;
};

const FormContainer: React.FC<FormContainerType> = ({ title, children }) => {
  return (
    <div className={styles.form}>
      <h1 className={styles.title}>{title}</h1>
      <div>{children}</div>
    </div>
  );
};

export default FormContainer;
