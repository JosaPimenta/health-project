import { Link } from 'react-router-dom';
import styles from './edit.module.css';
import DenseTable from './table';

export const EditPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Link className="btn" to="/">
          back to weekly view
        </Link>

        <h1>Hello Josa,</h1>
        <h2>This is your tracking for this month:</h2>
      </div>
      <div className={styles.monthContainer}>
        <DenseTable />
      </div>
    </>
  );
};
