import { useState, useContext, useEffect } from "react";
import Product from "./Product";
import { OrderContext } from "../../containers/Container";
import { useNavigate } from "react-router-dom";

const ProductList = ({updateOrderStatus, decreaseStockLevel}) => {
  const { currentOrder, setCurrentOrder } = useContext(OrderContext);
  const [numberOfProductsPacked, setNumberOfProductsPacked] = useState(0);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const navigate = useNavigate();

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
    decreaseStockLevel();
    navigate("/OrderListPage");
    setCurrentOrder(null);

  }

  return (
    <>
      {mappedProducts}
      {currentOrder?currentOrder.truckId: "Loading..."}
      {isOrderComplete ? (
        <button onClick={() => handleConfirmOrder()}>Confirmed</button>
      ) : (
        "Please pack all the products"
      )}
    </>
  );
};

export default ProductList;
