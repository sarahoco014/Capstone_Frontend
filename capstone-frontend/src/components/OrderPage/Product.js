import { useState , useEffect, useContext} from "react";
import { OrderContext } from '../../containers/Container';
import "./OrderPage.css";
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import EnlargeImageModal from "./EnlargeImageModal";
import ConfirmOrderModal from "./ConfirmOrderModal";

const Product = ({product, numberOfProductsPacked, setNumberOfProductsPacked, isOrderComplete,handleComplete}) => {
  const [isPacked, setIsPacked] = useState(false);
  const {currentOrder}=useContext(OrderContext);
  const [isImageModalOpen, setIsImageModalOpen]= useState(false)
  

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
      <div className="enlarge-image">
      <OpenInFullIcon className="expand-icon" onClick={()=>setIsImageModalOpen(true)}/>
      <img className="product-images" src={product.imageURL} width="50%"  height={"auto"} /></div>
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
      {isImageModalOpen && (<EnlargeImageModal product={product} setIsImageModalOpen={setIsImageModalOpen}/>)}
    </div>
    
  );
};

export default Product;
