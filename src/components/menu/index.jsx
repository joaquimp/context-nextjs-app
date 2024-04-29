'use client';

import Link from 'next/link';
import styles from './menu.module.css';
import defaultProfile from './defaultProfile.jpg';
import Image from 'next/image';
import { useLogin } from '@/context/loginContext';

export default function Menu() {
  const { user } = useLogin();

  if (!user) return null;

  return (
    <nav className={styles.menu}>
      <div className={styles.logo}>Empresa</div>
      <div className={styles.options}>
        <Link className={styles.option} href='/'>
          Home
        </Link>

        <Link className={styles.option} href='/about'>
          Sobre
        </Link>

        <Link className={styles.option} href='/profile'>
          <Image
            className={styles.profile}
            src={defaultProfile}
            width={96}
            height={96}
            alt='profile image'
          />
        </Link>
      </div>
    </nav>
  );
}
