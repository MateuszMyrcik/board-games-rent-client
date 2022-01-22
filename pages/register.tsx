import type { NextPage } from "next";
import Head from "next/head";
import AuthForm, { AuthFormType } from "../components/auth-form";
import { Footer } from "../components/footer";
import Navigation from "../components/navigation";
import { BoardGamesApiURL } from "../interfaces/generic.def";
import { IProductsData } from "../interfaces/product.def";
import styles from "../styles/Home.module.css";

const Register: NextPage<IProductsData> = ({ data }) => {
  console.log(data);
  return (
    <div className="bg-stone-50">
      <Head>
        <title>Board Game Rent</title>
        <meta name="description" content="Board Game Rent" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />

      <main className="h-screen py-16 flex-1 flex justify-center items-center">
        <AuthForm type={AuthFormType.Registration} />
      </main>

      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(BoardGamesApiURL.Products, {
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

export default Register;
