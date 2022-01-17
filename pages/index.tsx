import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/footer";
import Navigation from "../components/navigation";
import { IProductsData } from "../interfaces/product.def";
import styles from "../styles/Home.module.css";

const Home: NextPage<IProductsData> = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.container}>
      <Head>
        <title>Board Game Rent</title>
        <meta name="description" content="Board Game Rent" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Board Game Rent</h1>

        <p className={styles.description}>
          Ready to rent some awesome board game right now? :)
        </p>

        <div>
          <div>List of available products</div>
          <ul>
            {data.map((product) => {
              return (
                <li key={product._id}>
                  <h3> {product.title}</h3>
                  <div> {product.body}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/products", {
    mode: "no-cors",
  });

  const data = await res.json();

  console.log(data);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Home;
