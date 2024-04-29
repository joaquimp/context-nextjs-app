'use client'

import { useLogin } from "@/context/loginContext";
import styles from "./page.module.css";
import Login from "@/components/login";

export default function Home() {
  const { user } = useLogin();

  if (!user) {
    return <Login />;
  }

  return (
    <main className={styles.main}>
      Bem-vindo(a) {user.username}
    </main>
  );
}
