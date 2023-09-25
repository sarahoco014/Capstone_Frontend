import Order from "./Order"
import { useState, useEffect } from "react"

const OrderList = ({orderList, updateOrderStatus, truckList}) => {
    
    const mappedOrders = orderList?.map((order) => {
        return (
        <div className="orders-box" key={order.id}>
            <Order order={order}
            updateOrderStatus={updateOrderStatus}
            truckList={truckList}/>
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