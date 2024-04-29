'use client';

import { useRouter } from 'next/navigation';
import styles from './about.module.css';
import { useLogin } from '@/context/loginContext';

export default function About() {
  const { user } = useLogin();
  const router = useRouter();

  if (!user) {
    router.push('/');
    return <div>redirecionando...</div>;
  }

  return (
    <main className={styles.main}>
      Projeto desenvolvido para demonstrar o uso de contexto em NextJS
    </main>
  );
}
