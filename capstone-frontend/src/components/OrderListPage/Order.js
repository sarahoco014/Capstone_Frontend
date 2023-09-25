import { Link } from "react-router-dom"

const Order = ({order}) => {
    return(
        <>
        <p>{order.id}</p>
        <p>{order.orderPriority ? "priority" : "non-priority"}</p>
        <p>{order.date}</p>
        <Link to={`/OrderPage/${order.id}`}>
            <button>Pack Order</button>
        </Link>
        </>

    );
    
}

export default Order;