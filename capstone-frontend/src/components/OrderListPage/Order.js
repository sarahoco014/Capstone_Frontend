import { useContext } from "react";
import { Link } from "react-router-dom";
import { OrderContext } from "../../containers/Container";
import "./OrderListPage.css";
import Button from "@mui/material/Button";

const Order = ({ order, updateOrderStatus, truckList }) => {
  const { setCurrentOrder } = useContext(OrderContext);

  const handlePackOrder = () => {
    console.log("handling pack order button");
    setCurrentOrder(order);
    if(order.status ==="UNFULFILLED" || order.status ==="ONHOLD"){
      console.log("hello")
    const truckId = assignTruck();
    updateOrderStatus(order.id, truckId, "ONGOING");}
  };

  console.log(truckList);

  const calculateProductsSumSize = (orderToCalculate) => {
    let total = 0;
    orderToCalculate.products.map((product) => {
      product.size === "SMALL"
        ? (total += 10)
        : product.size === "MEDIUM"
        ? (total += 15)
        : (total += 20);
    });
    return total;
  };
  
  const assignTruck = () => {
    let maxSumOfOrders = 0;
    let selectedTruckId = null;
  
    for (let i = 0; i < truckList.length; i++) {
      const truck = truckList[i];
      let sumOfOrdersOnTruck = 0;
  
      for (let j = 0; j < truck.orders.length; j++) {
        sumOfOrdersOnTruck += calculateProductsSumSize(truck.orders[j]);
      }
  
      if (
        sumOfOrdersOnTruck + calculateProductsSumSize(order) <= truck.maxCapacity &&
        sumOfOrdersOnTruck >= maxSumOfOrders
      ) {
        maxSumOfOrders = sumOfOrdersOnTruck;
        selectedTruckId = truck.id;
      }
    }
  
    return selectedTruckId;
  };

  return (
    <>
      <h4 className="order-number-tag">Order Number : {order.id}</h4>
      <p className="number-of-products">Number of Products : {order.products.length}</p>
      <p className="date-placed-tag">Date Placed : {order.date}</p>
      {order.orderPriority ? <p className="priority-tag">Priority</p> :<p className="non-priority-tag">Non-Priority</p>}
      {order.status !== "FINISHED" ? (
        <Link to={`/OrderPage/${order.id}`}>
          <button className="pack-order-button" onClick={() => handlePackOrder()}>Pack Order</button>
        </Link>
      ) : (
        <p className="order-completed-tag">Order Completed</p>
      )}
    </>
  );
};

export default Order;
