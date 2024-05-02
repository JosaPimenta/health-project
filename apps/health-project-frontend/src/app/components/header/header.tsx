import styles from './header.module.css';

export const Header = () => {
  return (
    <div className={styles.nav}>
      <img className={styles.logo} src="/logo.png" alt="logo" />
    </div>
  );
};
