import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { BoardGamesApiURL } from "../../interfaces/generic.def";
import { IProduct } from "../../interfaces/product.def";
import useUserProfile from "../../lib/hooks/userProfile";

interface IProductsTableProps {
  data: IProduct[];
}

export const ProductsTable: React.FunctionComponent<IProductsTableProps> = (
  props
) => {
  const { data } = props;

  const [products, setProducts] = useState(data);

  const { data: profile, isLoading, isError } = useUserProfile();

  const isAdmin = profile?.username?.length > 0;

  const onClickRemoveRow = (e: any) => {
    const productId = e.target.id;
    console.log(productId);
    setProducts(products.filter((product) => product._id !== productId));
    fetch(`${BoardGamesApiURL.Products}/${productId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onCheckboxChange = (e: any) => {
    const productId = e.target.id;
    fetch(`${BoardGamesApiURL.Products}/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isRented: e.target.checked }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onHeaderButtonClick = () => {
    const form = document.querySelector("#products-add-form");
    form?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="antialiased bg-gray-100 text-gray-600 px-4 py-10">
      <div className="flex flex-col justify-center h-full">
        <div className="w-full  mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
            <h2 className="font-semibold text-gray-800">Game boards list:</h2>
            {isAdmin ? (
              <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                onClick={() => onHeaderButtonClick()}
              >
                Add new board game
              </button>
            ) : null}
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
                      <div className="font-semibold text-left">Category</div>
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
                      <div className="font-semibold text-left">Play Time</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        Is available?
                      </div>
                    </th>
                    {isAdmin && (
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          Remove row
                        </div>
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {products.map((product, id) => {
                    // const checked = product.isRented
                    return (
                      <tr key={id}>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-20 flex-shrink-0 mr-2 sm:mr-3 items-center">
                              <img src={product.image} alt={product.title} />
                            </div>
                            <div className="font-medium text-gray-800">
                              {product.title}
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{product.category}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium">
                            {product.playersNumb?.from}-
                            {product.playersNumb?.to}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium text-green-500">
                            {product.prize}$
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium">
                            {product.playTime?.from}-{product.playTime?.to}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium">
                            {(() => {
                              if (isAdmin)
                                return (
                                  <input
                                    type="checkbox"
                                    id={product._id}
                                    defaultChecked={product.isRented}
                                    onChange={(e) => onCheckboxChange(e)}
                                  />
                                );
                              if (product.isRented)
                                return (
                                  <FontAwesomeIcon
                                    icon={faCheck}
                                    style={{ color: "green" }}
                                  />
                                );
                              else
                                return (
                                  <FontAwesomeIcon
                                    icon={faTimes}
                                    style={{ color: "red" }}
                                  />
                                );
                            })()}
                          </div>
                        </td>
                        {isAdmin && (
                          <td className="p-2 whitespace-nowrap  hover:cursor-pointer">
                            <button
                              id={product._id}
                              onClick={(event) => onClickRemoveRow(event)}
                              className="text-left font-medium underline"
                            >
                              Click to remove row
                            </button>
                          </td>
                        )}
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
  );
};
