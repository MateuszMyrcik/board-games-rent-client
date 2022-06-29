import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/footer";
import Navigation from "../components/navigation";
import { IProductsData } from "../interfaces/product.def";
import styles from "../styles/Home.module.css";

const Home: NextPage<IProductsData> = ({ data }) => {
  const headerGames = data.slice(0, 3);
  return (
    <div className={styles.container}>
      <Head>
        <title>Board Game Rent</title>
        <meta name="description" content="Board Game Rent" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />

      <main className={styles.main}>
        <div
          className=" p-10 rounded-xl"
          style={{ backgroundColor: "rgba(31, 41, 55, 0.9);" }}
        >
          <h1 className="text-4xl text-center pb-4 text-semibold uppercase">
            Board Games Rent
          </h1>
          <h2 className="italic p-4 text-lg">
            Do you wanna play games without buying it? This is the perfect place
            for it! Check out games list and find something which fits in for
            you :)
          </h2>
          <div className="flex pb-4">
            {headerGames.map((game) => {
              return (
                <div
                  key={game._id}
                  className="bg-gray-50 text-black m-2 p-2 shadow-lg flex-1 flex justify-center flex-row items-center shadow-lg rounded-xl"
                >
                  <div
                    className={`w-32 h-32 items-center bg-cover justify-center rounded-xl`}
                    style={{ backgroundImage: `url('${game.image}')` }}
                  ></div>

                  <div className="pl-4">
                    <div className="font-semibold">{game.title}</div>

                    <div className="italic">{game.designer}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mx-auto w-fit bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <Link href="/products/1">See more fancy games</Link>
          </div>
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
