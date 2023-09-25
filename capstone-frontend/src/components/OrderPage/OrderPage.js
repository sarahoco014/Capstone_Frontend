import { useContext, useEffect } from "react";
import { OrderContext } from '../../containers/Container.js';
import ProductList from "./ProductList";
import { useParams } from "react-router-dom";

const OrderPage = ({orderList, updateOrderStatus}) => {

    const {currentOrder,setCurrentOrder} = useContext(OrderContext);

    // finds current order from what is route
    const { id } = useParams();
    const findOrderById = (orderList, id) => {
        return orderList.find((order) => order.id === Number(id));
    };
    const foundOrder = findOrderById(orderList, id);

    useEffect(() => {
      setCurrentOrder(foundOrder);
    }, [foundOrder,currentOrder]);

    return(
    <div>
       {currentOrder?(<ProductList updateOrderStatus={updateOrderStatus}/>):(<p>Loading .....</p>)} 
    </div>)
}

export default OrderPage;