import { useState, useContext, useEffect } from "react";
import Product from "./Product";
import { OrderContext } from "../../containers/Container";

const ProductList = ({updateOrderStatus}) => {
  const { currentOrder } = useContext(OrderContext);
  const [numberOfProductsPacked, setNumberOfProductsPacked] = useState(0);
  const [isOrderComplete, setIsOrderComplete] = useState(false);

  if (!currentOrder || !currentOrder.products) {
    return <p>Loading...</p>;
  }
  const handleComplete = () => {
      setIsOrderComplete(!isOrderComplete)
    }
  const mappedProducts = currentOrder.products.map((product, index) => {
    return (
      <div className="each-product" key={index}>
        <Product
          product={product}
          numberOfProductsPacked={numberOfProductsPacked}
          setNumberOfProductsPacked={setNumberOfProductsPacked}
          isOrderComplete={isOrderComplete}
          handleComplete={handleComplete}
        />
      </div>
    );
  });

  const handleConfirmOrder = () => {
    updateOrderStatus(currentOrder.id, 1, "FINISHED");
  }

  return (
    <>
      {mappedProducts}
      {isOrderComplete ? (
        <button onClick={() => handleConfirmOrder()}>Confirmed</button>
      ) : (
        "Please pack all the products"
      )}
    </>
  );
};

export default ProductList;
