import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <Container className={styles.errorPage}>
      <div className="text-center">
        <h1 style={{ fontSize: "6rem", color: "#00570e" }}>Oops!</h1>
        <h2 style={{ color: "#00570e", fontSize: "2rem" }}>A página que você procurou não foi encontrada!</h2>
        <img src="https://media.giphy.com/media/3o85xGoY0hpwHjUOyw/giphy.gif" alt="Lost in space" style={{ width: "300px", borderRadius: "10px", marginBottom: "20px" }} />
        <div>
          <Link to="/">
            <Button variant="primary" size="lg" className={styles.backButton}>
              Voltar para a Página Inicial
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ErrorPage;
