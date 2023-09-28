const CartOrder = ({ totalAmount }) => {
  return (
    <div className="order-info">
      <div>{totalAmount}</div>
      <div>
        <button>주문하기</button>
      </div>
    </div>
  );
};

export default CartOrder;
