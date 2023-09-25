import { useContext } from "react";
import Product from "./Product";

const ProductList = () => {
    const {currentOrder} = useContext(OrderContext);

    const mappedProducts = currentOrder.products.map((product)=>
    {
        <div className="each-product">
            <Product product={product} key={product.id}/>
        </div>
    })

    return(
    <>
    {mappedProducts}
    </>)
}

export default ProductList;