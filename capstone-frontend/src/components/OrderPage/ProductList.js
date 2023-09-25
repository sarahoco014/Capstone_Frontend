import { useState, useContext, useEffect } from "react";
import Product from "./Product";
import { OrderContext } from "../../containers/Container";

const ProductList = () => {
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

  return (
    <>
      {mappedProducts}
      {isOrderComplete ? (
        <button>Confirmed</button>
      ) : (
        "Please pack all the products"
      )}
    </>
  );
};

export default ProductList;
