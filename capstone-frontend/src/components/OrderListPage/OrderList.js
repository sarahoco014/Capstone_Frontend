import Order from "./Order"
import { useState, useEffect } from "react"

const OrderList = ({orderList}) => {
    
    const mappedOrders = orderList?.map((order) => {
        return (
        <div className="orders-box" key={order.id}>
            <Order order={order} />
        </div>)
    })


    return(
        <div>
            <p>hello world on order list page</p>
            {mappedOrders}
        </div>
    );

    
}

export default OrderList;