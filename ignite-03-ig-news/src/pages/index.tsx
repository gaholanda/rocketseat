import Head from "next/head";
import Image from "next/image";
import { SubscribeButton } from "../components/SubscribeButton";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | ig news</title>
      </Head>
      <main className={styles.content}>
        <section className={styles.hero}>
          <span>👋 Hey, welcome!</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>Get access to all the publications <span>for $9.90 mounth</span></p>
          <SubscribeButton />
        </section>

        <Image 
          src="/images/avatar.svg" 
          alt="girl coding" 
          layout="intrinsic" 
          width={700}
          height={475}
        />
      </main>
    </div>
  );
}
