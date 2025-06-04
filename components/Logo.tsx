import styles from "./Logo.module.css";
// Logo
const Logo = () => {
  return (
    <div className={styles.logo_container}>
      <span className={styles.logo_first_letter}>React Bangla Documentation </span>
    </div>
  );
};

export default Logo;
