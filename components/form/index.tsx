import React, { useState } from "react";
import { Input } from "../input";
import { TextArea } from "../text-area";

interface IFormProps {}

export const Form: React.FunctionComponent<IFormProps> = (props) => {
  const [form, setForm] = useState({
    title: "",
    body: "",
    playTime: {
      from: "",
      to: "",
    },
    playersNumb: {
      from: "",
      to: "",
    },
    difficultyLevel: "",
    category: "",
    image: "",
    reservation: "",
    prize: "",
    suggestAge: "",
    designer: "",
    isRented: false,
  });
  // _id: '';
  // __v: number;
  // title: string;
  // body: string;
  // playTime: IPlayTime;
  // playersNumb: IPlayersNumb;
  // difficultyLevel: string;
  // category: string;
  // image: string;
  // reservation?: number;
  // prize?: number;
  // suggestAge?: number;
  // designer: string;
  {
    /* <p className="text-red-500 text-xs italic">
            Please fill out this field.
          </p> */
  }
  {
    /* border-red-500 */
  }

  const handleInputChange = (event: any) => {
    const { value, id } = event.target;

    if (id.includes("from") || id.includes("to")) {
      const objectName = id.split("-")[0];
      const objectKey = id.split("-")[1];

      setForm({
        ...form,
        [`${objectName}`]: {
          ...form[`${objectName}`],
          [`${objectKey}`]: value,
        },
      });
    } else {
      setForm({ ...form, [`${id}`]: value });
    }
  };

  const handleSubmit = (event: any) => {
    debugger;

    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).catch((err) => {
      console.log(err);
    });

    // event.preventDefault();
  };

  return (
    <form
    id="products-add-form"
      onSubmit={(event) => handleSubmit(event)}
      className="antialiased bg-gray-100 text-gray-600 px-4 mb-10"
    >
      <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200 p-10">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Input inputChange={handleInputChange} id="title" label="Title" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <Input
              inputChange={handleInputChange}
              id="image"
              label="Image Url"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Input
              inputChange={handleInputChange}
              id="playTime-from"
              label="Play time from (min)"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <Input
              inputChange={handleInputChange}
              id="playTime-to"
              label="Play time to (min)"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Input
              inputChange={handleInputChange}
              id="playersNumb-from"
              label="Players number from"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <Input
              inputChange={handleInputChange}
              id="playersNumb-to"
              label="Players number to"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <Input
              inputChange={handleInputChange}
              id="difficultyLevel"
              label="Difficulty Level"
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <Input
              inputChange={handleInputChange}
              id="category"
              label="Category"
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <Input
              inputChange={handleInputChange}
              id="prize"
              label="Prize ($)"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Input
              inputChange={handleInputChange}
              id="suggestAge"
              label="Suggest Age"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <Input
              inputChange={handleInputChange}
              id="designer"
              label="Designer"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full mb-6 md:mb-0">
            <TextArea
              inputChange={handleInputChange}
              id="body"
              label="description"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <input
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold mt-5 py-2 px-4 border border-gray-400 rounded shadow"
            type="submit"
            value="Submit"
          ></input>
        </div>
      </div>
    </form>
  );
};

// <div className="flex flex-wrap -mx-3 mb-6">
// <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
// 	<label
// 		className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
// 		htmlFor="grid-state"
// 	>
// 		State
// 	</label>
// 	<div className="relative">
// 		<select
// 			className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
// 			id="grid-state"
// 		>
// 			<option>New Mexico</option>
// 			<option>Missouri</option>
// 			<option>Texas</option>
// 		</select>
// 		<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// 			<svg
// 				className="fill-current h-4 w-4"
// 				xmlns="http://www.w3.org/2000/svg"
// 				viewBox="0 0 20 20"
// 			>
// 				<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
// 			</svg>
// 		</div>
// 	</div>
// </div>
// <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
// 	<label
// 		className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
// 		htmlFor="grid-zip"
// 	>
// 		Zip
// 	</label>
// 	<input
// 		className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
// 		id="grid-zip"
// 		type="text"
// 		placeholder="90210"
// 	/>
// </div>
// </div>
