import { useState } from "react";

const Product = ({
  product,
  numberOfProductsPacked,
  setNumberOfProductsPacked,
}) => {
  const [isPacked, setIsPacked] = useState(false);

  //   const handleConfirmItem = () => {
  //     setIsPacked(!isPacked);
  //     if (isPacked) {
  //       setNumberOfProductsPacked(numberOfProductsPacked + 1);
  //       console.log(numberOfProductsPacked);
  //     } else {
  //       setNumberOfProductsPacked(numberOfProductsPacked - 1);
  //       console.log(numberOfProductsPacked);
  //     }
  //   };

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
