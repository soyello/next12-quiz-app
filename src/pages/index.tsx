import { Geist, Geist_Mono } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <div className={styles.homeWrapper}>
        <p className={styles.description}>퀴즈 홈페이지</p>
        <p className={styles.description}>반갑습니다.</p>
        <Link className={styles.startBtn} href='/quiz'>
          퀴즈 시작하기
        </Link>
      </div>
    </>
  );
}
