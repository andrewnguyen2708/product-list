import axiosClient from "./axiosClient";

const getProductList = async (params: any) => {
  try {
    const url = "/products";
    const res = await axiosClient.get(url, { params });
    console.log(res);

    return res;
  } catch (err) {
    console.log(err);
  }
};

export default getProductList;
