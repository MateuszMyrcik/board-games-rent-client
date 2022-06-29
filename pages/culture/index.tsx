import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../../components/footer";
import Navigation from "../../components/navigation";
import { IProductsData } from "../../interfaces/product.def";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
import { AccountType, BoardGamesApiURL } from "../../interfaces/generic.def";
import { ProductsTable } from "../../components/products-table";
import { Form } from "../../components/form";
import { useEffect, useState } from "react";
import useUserProfile from "../../lib/hooks/userProfile";
import { Pagination } from "../../components/pagination";
import YoutubeEmbed from "../../components/youtube-embed";
import Card from "../../components/card";
config.autoAddCss = false;

const Culture: NextPage<IProductsData> = ({ data, pageNumb }) => {
  const ytIds = [
    "ixiAj_gmSZU",
    "uAQkxgj_YG4",
    "_iCBTYd4_2o",
    "6TkQovpJhdU",
    "VoIyClbclZA",
    "nd28YzKTIrI",
  ];

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
        <header className="text-xl px-5 py-4 border-b border-gray-100 flex justify-between items-center border-b-2 border-slate-400">
          <h2 className="font-semibold text-gray-800">
            Check some fresh videos from board games community!
          </h2>
        </header>
        <section className="grid grid-cols-3 p-4 gap-1">
          {ytIds.map((id, index) => {
            return <Card key={index} embedId={id}></Card>;
          })}
        </section>
        <Footer />
      </main>
    </div>
  );
};

// export async function getServerSideProps(props) {
//   const res = await fetch("http://localhost:3000/products", {
//     mode: "no-cors",
//   });

//   const data = await res.json();

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { data, pageNumb: Number(props.params.pageNumb) }, // will be passed to the page component as props
//   };
// }

export default Culture;
