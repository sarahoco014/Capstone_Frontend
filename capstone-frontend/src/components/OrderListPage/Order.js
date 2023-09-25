import { useContext } from "react";
import { Link } from "react-router-dom"

const Order = ({order}) => {
    const {setCurrentOrder}=useContext(OrderContext);

    return(
    
        <>
        <p>{order.id}</p>
        <p>{order.orderPriority ? "priority" : "non-priority"}</p>
        <p>{order.date}</p>
        <Link to={`/OrderPage/${order.id}`}>
            <button onClick={(()=>setCurrentOrder(order))}>Pack Order</button>
        </Link>
        </>

    );
}

export default Order;
