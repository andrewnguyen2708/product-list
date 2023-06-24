import { useState, useEffect } from "react";
import Products from "./pages/Products";
import Header from "./components/Header";
import axiosClient from "./api/axiosClient";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [listProducts, setListProducts] = useState(new Array(0));

  useEffect(() => {
    const timeoutID = setTimeout(async () => {
      try {
        const url = "/products/search";
        const res: any = await axiosClient.get(url, {
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
