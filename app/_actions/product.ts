"use server";

import axios from "axios";
import { ProductType } from "../products/components/Products";
import { revalidatePath } from "next/cache";

export async function getAll() {
  const res = await axios({
    method: "GET",
    url: `${process.env.BASEURL}products`,
  });
  // You can return Date, Map, Set, etc.

  if (!res) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.data;
}

export async function getSingle(productId: number) {
  try {
    const res = await axios({
      method: "GET",
      url: `${process.env.BASEURL}products/${productId}`,
    });
    // You can return Date, Map, Set, etc.

    if (!res) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function createProduct(prevState: any, formData: ProductType) {
  console.log(formData, "formEQTQs");
  const rawFormData = {
    title: formData.title,
    price: formData.price,
    description: formData.description,
    categoryId: formData.categoryId,
    images: formData.images,
  };
  try {
    const res = await axios({
      method: "POST",
      url: `${process.env.BASEURL}products`,
      data: rawFormData,
    });
    // You can return Date, Map, Set, etc.

    if (!res) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to post data");
    }
    console.log(res.data, "asaa");
    revalidatePath("/products");
    return { message: `Added Product ${res.data}` };
  } catch (error) {
    return { message: `Failded to create Product` };
    console.log(error);
  }
  // mutate data
  // revalidate cache
}
