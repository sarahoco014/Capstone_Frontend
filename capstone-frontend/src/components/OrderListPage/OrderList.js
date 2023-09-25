import Order from "./Order"

const OrderList = ({orders, orderList}) => {

    const mappedOrders = orderList.map((order) => {
        <div>
            <Order order={order} key={order.id}/>
        </div>
    })
    return(
        <div>
            {mappedOrders}
        </div>
    );

    
}

export default OrderList;