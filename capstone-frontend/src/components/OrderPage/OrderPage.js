import { useContext, useParams, useEffect } from "react";
import { OrderContext } from '../../containers/Container.js';
import ProductList from "./ProductList";

const OrderPage = ({orderList}) => {

    const {currentOrder,setCurrentOrder} = useContext(OrderContext);

    return(
    <>
       {currentOrder?(<ProductList/>):(<p>Loading .....</p>)} 
    </>)
}

export default OrderPage;