import React from "react";
import Single from "./Single";
import { getSingle } from "@/app/_actions/product";

const Container = async ({ id }: { id: number }) => {
  const data = await getSingle(id);
  return (
    <>
      <Single data={data} />
    </>
  );
};

export default Container;
