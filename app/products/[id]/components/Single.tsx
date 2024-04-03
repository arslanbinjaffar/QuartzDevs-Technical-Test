"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { ProductType } from "../../components/Products";
import { TiMinus, TiPlus } from "react-icons/ti";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";
const Single = ({ data }: { data: ProductType }) => {
  const [selectImage, setSelectImage] = useState(data?.images[0]);
  const { push } = useRouter();
  return (
    <div
      className="
  grid grid-cols-1 md:grid-cols-3 gap-3 items-start p-5"
    >
      <div className="w-full">
        <figure className="w-full h-full ">
          <img className="w-full h-full" src={selectImage} alt="image" />
        </figure>
        <div className="flex my-2 gap-3">
          {data.images.map((image) => {
            return (
              <figure
                key={image}
                onClick={() => setSelectImage(image)}
                onMouseOver={() => setSelectImage(image)}
                className={`cursor-pointer border ${
                  image == selectImage ? "border-red-500" : ""
                }`}
              >
                <img className="w-16 h-16 rounded-sm" src={image} alt="" />
              </figure>
            );
          })}
        </div>
      </div>
      <div className="col-span-2">
        <h2 className="text-xl font-medium ">{data.title}</h2>
        <p className="font-normal text-base">{data.description}</p>
        <div className="flex items-center gap-0 my-2">
          {new Array(5).fill("").map((item, i) => (
            <FaStar className="text-orange-400" key={i} />
          ))}
          <p className="ms-1 text-blue-600 capitalize">25 rating</p>
          <div className="h-[0.5px] w-[20px] bg-blue-700 rotate-90"></div>
          <p className="ms-1 text-blue-600 capitalize ">
            54 answered Questions
          </p>
        </div>
        <div className="bg-gray-300 h-[0.5px] w-full my-3"></div>
        <p className="text-orange-500 text-3xl font-medium">$ {data.price}</p>
        <div className="flex items-center gap-5    ">
          <h2 className="capitalize font-base font-medium text-base">
            quantity
          </h2>
          <button
            className="bg-gray-300 text-black p-3 px-4 rounded-md text-base font-medium "
            disabled={true}
          >
            <TiMinus />
          </button>
          <p>{1}</p>
          <button className="bg-gray-300 text-black p-3  px-4 rounded-md">
            <TiPlus />
          </button>
        </div>
        <div className="flex gap-3 items-center my-5">
          <Button className="w-2/4 capitalize">buy now</Button>
          <Button className="w-2/4 capitalize bg-orange-500">add cart</Button>
        </div>
        <Button
          onClick={() => push("/products")}
          className="w-2/4 capitalize bg-transparent border border-orange-400 text-black"
        >
          back to products
        </Button>
      </div>
    </div>
  );
};

export default Single;
