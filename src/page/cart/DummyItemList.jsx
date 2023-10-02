import { StyledCart } from "./Cart";
import DummyItem from "./DummyItem";
const DummyItemList = ({ id }) => {
  const items = [
    {
      product_id: 3,
      product_name: "Ritual",
      product_price: "250,000",
      cart_cnt: "2",
      cart_product_amount: "500,000",
    },
    {
      product_id: 8,
      product_name: "Stephanie Blau",
      product_price: "34,000",
      cart_cnt: "1",
      cart_product_amount: "34,000",
    },
  ];
  return (
    <StyledCart>
      <div className="wrapper">
        <div className="page-title">품목</div>
        <div className="content">
          <div className="cart-items">
            {items.map((item) => {
              return (
                <DummyItem
                  key={item.product_id}
                  product_id={item.product_id}
                  product_name={item.product_name}
                  product_price={item.product_price}
                  cart_cnt={item.cart_cnt}
                  cart_product_amount={item.cart_product_amount}
                />
              );
            })}
          </div>
        </div>
      </div>
    </StyledCart>
  );
};

export default DummyItemList;
