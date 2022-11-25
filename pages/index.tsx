import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "./components/layout/NavBar";
import HomePage from "./components/layout/Home";

export default function Home() {
  return (
    // className={styles.container}
    <div className={styles.container}>
      <NavBar />
      <HomePage />
    </div>
  );
}
