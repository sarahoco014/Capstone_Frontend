import { useContext, useParams, useEffect } from "react";
import { OrderContext } from '../../containers/Container.js';
import ProductList from "./ProductList";

const OrderPage = ({orderList}) => {

    const {currentOrder,setCurrentOrder} = useContext(OrderContext);

    // const { id } = useParams();

    // const findOrderById = (orderList, id) => {
    //     return orderList.find((order) => order.id === Number(id));
    // };

    // const foundOrder = findOrderById(orderList, id);

    // useEffect(() => {
    //   setCurrentOrder(foundOrder);
    // }, [foundOrder,currentOrder])

    return(
    <>
       {currentOrder?(<ProductList/>):(<p>Loading .....</p>)} 
    </>)
}

export default OrderPage;