import { getAll } from "../_actions/product";
import Products from "./components/Products";

const Container = async () => {
  const data = await getAll();
  return (
    <>
      <Products data={data} />
    </>
  );
};

export default Container;
