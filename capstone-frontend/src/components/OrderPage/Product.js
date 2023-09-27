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
      <h3 className="product-name">{product.name}</h3>
      {/* <img  src={`/productImages/${product.imageURL}`} width="200px" height="200px" /> */}
      <img className="product-images" src={product.imageURL} width="250px" />
      <p className="product-category">{product.category}</p>
      <p className="product-location">Location in warehouse: {product.productLocation}</p>
      <div className="attributes">
        {product.heavy || product.fragile || product.flammable ? (
          <div>
            {product.heavy && <p>heavy</p>}
            {product.fragile && <p>fragile</p>}
            {product.flammable && <p>flammable</p>}
          </div>
      ) : (
        <p>No notes on this product</p>
        
      )}
    </div>

      {!isPacked ? (
        <button className="product-packed-button" onClick={handleItemPacked}> Confirm item packed</button>
      ) : (
        <button className="product-packed-button" onClick={handleItemUnpacked}>Undo</button>
      )}
    </div>
  );
};

export default Product;
