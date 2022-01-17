import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/footer";
import Navigation from "../components/navigation";
import { IProductsData } from "../interfaces/product.def";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const Products: NextPage<IProductsData> = ({ data }) => {
  console.log(data);
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
        <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
          <div className="flex flex-col justify-center h-full">
            <div className="w-full  mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
              <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">
                  Products available for you:
                </h2>
              </header>
              <div className="p-3">
                <div className="overflow-x-auto">
                  <table className="table-auto w-full">
                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">Title</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">
                            Category
                          </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">
                            Players Number
                          </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">Prize</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">
                            Play Time
                          </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">
                            Is available?
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100">
                      {data.map((product, id) => {
                        return (
                          <tr key={id}>
                            <td className="p-2 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                  <img
                                    className="rounded-full"
                                    src={product.image}
                                    width="40"
                                    height="40"
                                    alt="Alex Shatov"
                                  />
                                </div>
                                <div className="font-medium text-gray-800">
                                  {product.title}
                                </div>
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left">
                                {product.category}
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left font-medium">
                                {product.playersNumb.from}-
                                {product.playersNumb.to}
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left font-medium text-green-500">
                                {product.prize}$
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left font-medium">
                                {product.playTime.from}-{product.playTime.to}
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left font-medium">
                                <FontAwesomeIcon icon={faCheck} />
                                <FontAwesomeIcon icon={faTimes} />
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
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
