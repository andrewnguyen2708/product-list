import { useState, useEffect } from "react";
import Products from "./pages/Products";
import Header from "./components/Header";
import axiosClient from "./api/axiosClient";
import { ProductsType, ResponseType } from "./utils/types";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [listProducts, setListProducts] = useState<ProductsType[]>(
    new Array(0)
  );

  //handle search products
  useEffect(() => {
    const timeoutID = setTimeout(async () => {
      try {
        const url = "/products/search";
        const res: ResponseType = await axiosClient.get(url, {
          params: { limit: 20, q: searchValue },
        });

        setListProducts(res.products);
      } catch (err) {
        console.log(err);
      }
    }, 500);
    return () => clearTimeout(timeoutID);
  }, [searchValue]);

  return (
    <div className="app">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Products listProducts={listProducts} setListProducts={setListProducts} />
    </div>
  );
}

export default App;
