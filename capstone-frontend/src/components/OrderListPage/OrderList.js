import Order from "./Order"
import { useState, useEffect } from "react";
import "./OrderListPage.css";

const OrderList = ({orderList, updateOrderStatus, truckList}) => {

       // sort by date then by priority 
       const [sortedOrderList, setSortedOrderList] = useState([]);

       const sortList=() =>{
           const clonedList = [...orderList];
   
           //within the date sorts by priority
           clonedList.sort((order1,order2)=>{
               return order1.orderPriority? -1 : 1;
           });
   
           // sorts by date first, furthest back first (ascending order)
           clonedList.sort((order1,order2)=>{
           const date1 = new Date(order1.date).getTime();
           const date2 = new Date(order2.date).getTime();
           return date1 - date2;})
       setSortedOrderList(clonedList);}
   
       useEffect(() => {
               sortList();
       }, [orderList]);
    
       // to not sort can change to orderList
    const mappedOrders = sortedOrderList?.map((order) => {
        return (
        <div className="each-order-box" key={order.id}>
            <Order order={order}
            updateOrderStatus={updateOrderStatus}
            truckList={truckList}/>
        </div>)
    })


    return(
        <div className="all-orders-box">
            {mappedOrders}
        </div>
    );

    
}

export default OrderList;