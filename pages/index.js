import Image from "next/image";
import { Inter } from "next/font/google";
import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import styles from "./index.module.css";
const Home = () => {
  const router = useRouter();

  const onLoginClick = useCallback(() => {
    router.push("/login");
  }, [router]);

  const onRegisterClick = useCallback(() => {
    router.push("/register-try");
  }, [router]);

  return (
    <div className={styles.home}>
      <div className={styles.home1}>Home</div>
      <Button className={styles.login} variant="primary" onClick={onLoginClick}>
        Login
      </Button>
      <Button
        className={styles.register}
        variant="primary"
        onClick={onRegisterClick}
      >
        Register
      </Button>
    </div>
  );
};

export default Home;

