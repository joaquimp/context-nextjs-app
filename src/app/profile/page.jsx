'use client';

import { useLogin } from '@/context/loginContext';
import styles from './profile.module.css';
import { useRouter } from 'next/navigation';

export default function About() {
  const { user, logoff } = useLogin();
  const router = useRouter();

  if (!user) {
    router.push('/');
    return <div>redirecionando...</div>;
  }

  return (
    <main className={styles.main}>
      <div>
        Você está logado como: <strong>{user.username}</strong>
      </div>
      <div>
        Você fez login à: <strong>{user.loggedAt}</strong>
      </div>
      <button className={styles.logoff} onClick={logoff}>
        Sair
      </button>
    </main>
  );
}
