export const transformCartData = (getCartResponse) => {
  const newItems = getCartResponse.map((item) => {
    return {
      id: item.product_id,
      name: item.product_name,
      price: item.product_price,
      count: item.cart_cnt,
    };
  });

  return { items: newItems };
};

// {
//   "id": 1,
//   "items": [
//     {
//       "product_id": 3,
//       "product_name": "Ritual",
//       "product_price": 250000,
//       "cart_cnt": 2,
//       "cart_produc_amount": 500000
//     },
//     {
//       "product_id": 8,
//       "product_name": "Stephanie Blau",
//       "product_price": 34000,
//       "cart_cnt": 1,
//       "cart_product_amount": 34000
//     }
//   ]
// }
