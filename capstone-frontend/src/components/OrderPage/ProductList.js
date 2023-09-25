import { useContext } from "react";
import Product from "./Product";
import { OrderContext } from '../../containers/Container';

const ProductList = () => {
    const {currentOrder} = useContext(OrderContext);

    if (!currentOrder || !currentOrder.products) {
        return <p>Loading...</p>;
    }

    const mappedProducts = currentOrder.products.map((product)=>
    {return(
        <div className="each-product">
            <Product product={product} key={product.id}/>
        </div>
    )})

    return(
    <>
    {mappedProducts}
    </>)
}

export default ProductList;