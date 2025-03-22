import styles from './HomePage.module.css';
import orcImage from '../../assets/orc2.png'; 

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            <span className={styles.titleDark}>Bem-</span>
            <span className={styles.titleGreen}>vindo ao</span>
          </h1>
          <h2 className={styles.subtitle}>
            <span className={styles.subtitleGreen}>Portal</span>
            <span className={styles.subtitleDark}>Orc</span>
          </h2>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.orcWrapper}>
            <img src={orcImage} alt="Orc mascote" className={styles.orcImage} />
          </div>
        </div>
      </div>
      <nav className={styles.sideNav}>
        <ul>
          <li><a href="/" className={styles.navItem}><i className={styles.homeIcon}></i></a></li>
          <li><a href="/cadastro" className={styles.navItem}><i className={styles.profileIcon}></i></a></li>
          <li><a href="/menu" className={styles.navItem}><i className={styles.menuIcon}></i></a></li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;