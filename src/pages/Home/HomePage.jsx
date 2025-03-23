import styles from './HomePage.module.css';
import orcImage from '../../assets/Logo.svg'; 

const HomePage = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.sideNav}>
        <ul>
          <li><a href="/" className={styles.navItem}><i className={styles.homeIcon}></i></a></li>
          <li><a href="/cadastro" className={styles.navItem}><i className={styles.profileIcon}></i></a></li>
          <li><a href="/menu" className={styles.navItem}><i className={styles.menuIcon}></i></a></li>
        </ul>
      </nav>
      <div className={styles.content}>
        <img src={orcImage} alt="Orc mascote" className={styles.orcImage} />
      </div>
    </div>
  );
};

export default HomePage;