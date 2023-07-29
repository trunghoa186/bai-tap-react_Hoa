import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductList(props) {
  const [products, setProduct] = useState([]);
  const getData = async () => {
    try {
      const response = await axios(
        "https://batch-293-0-nodejs.onrender.com/user/products"
      );
      setProduct(response.data.payload)
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <ul>
        {
            products.length > 0 ? (
                products.map((item) => (
                    <>
                        <li key={item._id}>
                        <span>{item.name}: </span>
                        <span>{item.price}đ</span>
                        </li>
                    </>
            ))
            ) : <p>Không có sản phẩm</p>
        }
    </ul>
  );
}

export default ProductList;
