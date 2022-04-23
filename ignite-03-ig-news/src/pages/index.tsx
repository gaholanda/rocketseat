import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";

import styles from "../styles/Home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {

  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.amount);

  return (
    <div>
      <Head>
        <title>Home | ig news</title>
      </Head>
      <main className={styles.content}>
        <section className={styles.hero}>
          <span>👋 Hey, welcome!</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <span>for {price} mounth</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
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

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1KrlZtJbTSUUhGxerXt6G0g9", {
    expand: ["product"],
  });

  const product = {
    priceId: price.id,
    amount: price.unit_amount / 100,
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
