import { useState , useEffect, useContext} from "react";
import { OrderContext } from '../../containers/Container';
import "./OrderPage.css"

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
    <div className="each-product">
      <p className="product-name">{product.name}</p>
      <img className="product-images" src={`/productImages/${product.imageURL}`} width="200px" height="200px" />
      <p className="product-category">{product.category}</p>
      <p className="product-location">Location in warehouse: {product.productLocation}</p>
      <div className="attributes">
        {product.heavy && <p>heavy</p>}
        {product.fragile && <p>fragile</p>}
        {product.flammable && <p>flammable</p>}
      </div>
      {!isPacked ? (
        <button className="product-packed-button" onClick={handleItemPacked}> Confirm item packed</button>
      ) : (
        <button className="product-undo-button" onClick={handleItemUnpacked}>Undo</button>
      )}
    </div>
  );
};

export default Product;
