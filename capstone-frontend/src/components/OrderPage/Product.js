import { useState , useEffect, useContext} from "react";
import { OrderContext } from '../../containers/Container';

const Product = ({product, numberOfProductsPacked, setNumberOfProductsPacked, isOrderComplete,handleComplete}) => {
  const [isPacked, setIsPacked] = useState(false);
  const {currentOrder}=useContext(OrderContext);

  const handleItemPacked = () => {
    setNumberOfProductsPacked(numberOfProductsPacked + 1);
    setIsPacked(true);
    console.log(numberOfProductsPacked);
  };

  const handleItemUnpacked = () => {
    setIsPacked(false);
    setNumberOfProductsPacked(numberOfProductsPacked - 1);
    console.log(numberOfProductsPacked);
  };

  useEffect(() => {
    checkIsComplete();
  }, [numberOfProductsPacked]);

  const checkIsComplete = () => {
    if (numberOfProductsPacked === currentOrder.products.length) {
      handleComplete();
    }
    if (
      numberOfProductsPacked < currentOrder.products.length &&
      isOrderComplete === true
    ) {
      handleComplete();
    }
  };

  return (
    <>
      <p>{product.name}</p>
      {/* <p>{product.imageURL}</p> */}
      <p>{product.category}</p>
      <p>Location in warehouse: {product.productLocation}</p>
      {product.heavy && <p>heavy</p>}
      {product.fragile && <p>fragile</p>}
      {product.flammable && <p>flammable</p>}
      {!isPacked ? (
        <button onClick={handleItemPacked}> Confirm item packed</button>
      ) : (
        <button onClick={handleItemUnpacked}>Undo</button>
      )}
      {/* report faulty button  */}
    </>
  );
};

export default Product;
