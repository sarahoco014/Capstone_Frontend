const Product = ({product}) => {

    return(
        <>
        <p>{product.name}</p>
        {/* <p>{product.imageURL}</p> */}
        <p>{product.category}</p>
        <p>Location in warehouse: {product.productLocation}</p>
        <p>{product.heavy && (<p>heavy</p>)}</p>
        <p>{product.fragile && (<p>fragile</p>)}</p>
        <p>{product.flammable && (<p>flammable</p>)}</p>
        <button> Confirm item packed</button>
        {/* report faulty button  */}
    </>)
}

export default Product;