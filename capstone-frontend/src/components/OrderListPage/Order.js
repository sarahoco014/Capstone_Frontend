import { useContext } from "react";
import { Link } from "react-router-dom"
import { OrderContext } from '../../containers/Container';

const Order = ({order, updateOrderStatus}) => {
    const {setCurrentOrder}=useContext(OrderContext);
    console.log("hello")

    const handlePackOrder=() =>{
        console.log("handling pack order button");
        setCurrentOrder(order);
        updateOrderStatus(order.id, 1, "ONGOING");
    }

    return(
    
        <>
        <p>{order.id}</p>
        <p>{order.orderPriority ? "priority" : "non-priority"}</p>
        <p>{order.date}</p>
        <Link to={`/OrderPage/${order.id}`}>
            <button onClick={(()=>handlePackOrder())}>Pack Order</button>
        </Link>
        </>

    );
}

export default Order;
