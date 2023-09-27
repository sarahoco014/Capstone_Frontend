import { useState, useContext, useEffect } from "react";
import Product from "./Product";
import { OrderContext } from "../../containers/Container";
import { useNavigate } from "react-router-dom";
import "./OrderPage.css"

const ProductList = ({updateOrderStatus, decreaseStockLevel}) => {
  const { currentOrder, setCurrentOrder } = useContext(OrderContext);
  const [numberOfProductsPacked, setNumberOfProductsPacked] = useState(0);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const navigate = useNavigate();
  const [sortedProductList, setSortedProductList] = useState([])


  const sortProductList = () =>{ 
        if (!currentOrder || !currentOrder.products) {
            return <p>Loading...</p>;
        }
        const clonedProductList= [...currentOrder.products];
        clonedProductList.sort((product1,product2)=>{
            const number1=product1.productLocation.substring(1);
            const number2=product2.productLocation.substring(1);
            return number2-number1; // sorts number location in decending order.
            //(after it being alphabetically cloned)
        })
        clonedProductList.sort((product1,product2)=>{
            const charcode1=product1.productLocation.charCodeAt(0);
            const charcode2=product2.productLocation.charCodeAt(0);
            return charcode1-charcode2;// sorts from A-Z
        })
        setSortedProductList(clonedProductList)
    }

    useEffect(() => {
        sortProductList();
    }, [currentOrder]);

  if (!currentOrder || !currentOrder.products) {
    return <p>Loading...</p>;
  }


  const handleComplete = () => {
      setIsOrderComplete(!isOrderComplete)
  }

  // to not sort change sortedProductList to currentOrder.products
  const mappedProducts = sortedProductList.map((product, index) => {
    return (
      <div key={index}>
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
    <div className="order-and-truck-id" >
    <h2 className="order-id">Order Id : {currentOrder.id} </h2>
    {currentOrder? (<p className="truck-id">Assigned Truck {currentOrder.truck.id}</p>):
    (<p className="truck-id">Loading...</p>)}</div>
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
