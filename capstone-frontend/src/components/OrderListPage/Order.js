import { useContext } from "react";
import { Link } from "react-router-dom"
import { OrderContext } from '../../containers/Container';

const Order = ({order}) => {
    const {setCurrentOrder}=useContext(OrderContext);

    const handlePackOrder=() =>{
        console.log("handling pack order button")
        setCurrentOrder(order)
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
