import React, { useRef, useState } from "react";
import axiosClient from "@/api/axiosClient";
import ProductItem from "../../components/ProductItem";
import { ProductsType, ResponseType } from "@/utils/types";

type ProductsProps = {
  listProducts: ProductsType[];
  setListProducts: React.Dispatch<React.SetStateAction<ProductsType[]>>;
};

export default function Products({
  listProducts,
  setListProducts,
}: ProductsProps) {
  const [skip, setSkip] = useState<number>(20);
  const observer = useRef<IntersectionObserver | null>(null);

  //observe last item load more item
  const lastDocumentRef = (node: HTMLInputElement) => {
    observer.current = new IntersectionObserver(async (entries) => {
      if (entries[0].isIntersecting) {
        try {
          const url = "/products";
          const res: ResponseType = await axiosClient.get(url, {
            params: { limit: 20, skip },
          });
          setListProducts((prevProducts) => [...prevProducts, ...res.products]);
          setSkip((prev) => prev + 20);
        } catch (err) {
          console.log(err);
        }
      }
    });
    if (node) observer.current.observe(node);
  };

  return (
    <div className="container mx-auto mt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {listProducts.map((item, index) => (
          <React.Fragment key={item.id}>
            {listProducts.length === index + 1 ? (
              <div
                ref={lastDocumentRef}
                className="max-w-sm rounded overflow-hidden shadow-lg mx-auto"
              >
                <ProductItem
                  title={item.title}
                  image={item.images[0]}
                  desc={item.description}
                  price={item.price}
                />
              </div>
            ) : (
              <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
                <ProductItem
                  title={item.title}
                  image={item.images[0]}
                  desc={item.description}
                  price={item.price}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
