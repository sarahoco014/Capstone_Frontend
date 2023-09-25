import Order from "./Order"
import { useState } from "react"

const OrderList = ({orderList}) => {
    // const [clonedList, setClonedList]= useState([])
    // setClonedList([...orderList])
    
    const mappedOrders = orderList?.map((order) => {
        <div className="orders-box" key={order.id}>
            <Order order={order} />
        </div>
    })


    return(
        <div>
            <p>hello world on order list page</p>
            <p>{mappedOrders}</p>
        </div>
    );

    
}

export default OrderList;