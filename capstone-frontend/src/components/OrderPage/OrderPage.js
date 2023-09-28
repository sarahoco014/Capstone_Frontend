import { useContext, useEffect } from "react";
import { OrderContext } from '../../containers/Container.js';
import ProductList from "./ProductList";
import { useParams } from "react-router-dom";

const OrderPage = ({orderList, updateOrderStatus, decreaseStockLevel}) => {

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
        <p className="order-id">Order Id : {Number(id)} </p>
          {/* <div className="order-and-truck-id" >
            {foundOrder ? (<p className="order-id">Order Id : {foundOrder.id} </p>):(<p>Loading...</p>)} 
            {foundOrder? (<p className="truck-id">Assigned&nbsp;Truck {foundOrder.truck.id}</p>):
                                        (<p className="truck-id">Loading...</p>)}</div> */}
       {currentOrder?(<ProductList updateOrderStatus={updateOrderStatus}
        decreaseStockLevel={decreaseStockLevel}/>):(<p>Loading .....</p>)} 
    </div>)
}

export default OrderPage;