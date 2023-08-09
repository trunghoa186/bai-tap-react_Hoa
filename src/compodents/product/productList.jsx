import React, { useEffect, useState } from 'react';

import { axiosClient } from 'helper/axiosClient';

function ProductList(props) {
  const [products, setProduct] = useState([]);

  const getData = async () => {
    try {
      const response = await axiosClient('/user/products');

      setProduct(response.data.payload)
    } catch (error) {
      console.log('««««« error »»»»»', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ul>
      {
        products.length > 0 ? (
          products.map((item) => {
            return (
              <>
              <li key={item.id}>
                <span>{item.name}: </span>
                <span>{item.price}đ</span>
              </li>
              
              </>
            )
          })
        ) : <p>Không có sản phẩm</p>
      }
    </ul>
  );
}

export default ProductList;