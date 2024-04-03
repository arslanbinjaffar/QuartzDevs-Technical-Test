"use client";
import { useState } from "react";
import { Button, Card } from "flowbite-react";
import { useRouter } from "next/navigation";

export interface ProductType {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
  id: number;
}
interface Props {
  data: ProductType[];
}

const Products = ({ data }: Props) => {
  const router = useRouter();
  const [loadMore, setLoadMore] = useState(6);
  function handleDataMore() {
    setLoadMore((prev) => prev + 6);
  }

  return (
    <div className="my-10">
      <div className="grid md:grid-cols-6  gap-3">
        {data
          .slice(0, loadMore)
          .map(({ title, description, images, id }, index: number) => {
            return (
              <Card className="w-full h-full" key={id}>
                <img src={images[0]} alt={title} className="w-full h-[189px]" />
                <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  {title.substring(0, 26)}...
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {description.substring(0, 35)}...
                </p>
                <Button onClick={() => router.push(`/products/${id}`)}>
                  Read more
                  <svg
                    className="-mr-1 ml-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </Card>
            );
          })}
        <div className="col-span-full my-10 flex justify-center items-center">
          <Button
            onClick={() => {
              handleDataMore();
            }}
            className="w-2/4 capitalize"
          >
            Load more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
