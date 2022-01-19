import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/footer";
import Navigation from "../components/navigation";
import { IProductsData } from "../interfaces/product.def";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
import { AccountType } from "../interfaces/generic.def";
import { ProductsTable } from "../components/products-table";
import { Form } from "../components/form";
config.autoAddCss = false;

const Products: NextPage<IProductsData> = ({ data }) => {
  const userType = AccountType.Admin;

  return (
    <div className="bg-stone-50 h-screen">
      <Head>
        <title>Board Game Rent</title>
        <meta name="description" content="Board Game Rent" />
        <link rel="icon" href="/favicon.ico" />
        <style>{dom.css()}</style>
      </Head>
      <Navigation />

      <main>
        <ProductsTable data={data} />
        <Form />
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

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Products;
