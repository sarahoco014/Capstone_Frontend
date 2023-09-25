import { useContext } from "react";
import OrderContext from "./containers/Container"
import ProductList from "./ProductList";

const OrderPage = ({orderList}) => {

    const {currentOrder} = useContext(OrderContext);

    return(
    <>
        <ProductList/>
    </>)
}

export default OrderPage;