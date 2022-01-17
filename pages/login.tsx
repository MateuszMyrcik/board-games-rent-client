import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/footer";
import Navigation from "../components/navigation";
import { IProductsData } from "../interfaces/product.def";
import styles from "../styles/Home.module.css";

const AdminPanel: NextPage<IProductsData> = ({ data }) => {
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
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-red text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
              href="#"
            >
              Forgot Password?
            </a>
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

export default AdminPanel;
