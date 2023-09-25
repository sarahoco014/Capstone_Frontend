import { useContext } from "react";
import { Link } from "react-router-dom"
import { OrderContext } from '../../containers/Container';

const Order = ({order, updateOrderStatus, truckList}) => {

    const {setCurrentOrder}=useContext(OrderContext);

    const handlePackOrder= () =>{
        console.log("handling pack order button");
        setCurrentOrder(order);
        const truckId = assignTruck();
        updateOrderStatus(order.id, truckId, "ONGOING")
    }

    console.log(truckList);

    const calculateProductsSumSize = (orderToCalculate) => {
        let total = 0;
        orderToCalculate.products.map((product)=>{
            ((product.size==="SMALL")?total+=3 :(product.size==="MEDIUM")?total+=7 : total+=10)
    })
    return total;
    
    }

    const assignTruck = () => {
        //keep track of the totalSumSize, of the most filled truck.
        let maxSumOfOrders = 0;
        // keeps track of the most optimum truck found in map so far (highest total sum size)
        let selectedTruckId = null;

        truckList.map((truck) => {
          let sumOfOrdersOnTruck = 0;
          for (let i = 0; i < truck.orders.length; i++) {
            sumOfOrdersOnTruck += calculateProductsSumSize(truck.orders[i]);}

            // after sumOfOrdersOnTruck is calculated it checks if the order can fit in truck as well as checking if this "truck" is the most optimum truck available.
          if(sumOfOrdersOnTruck + calculateProductsSumSize(order) <= truck.maxCapacity && sumOfOrdersOnTruck>maxSumOfOrders){
            maxSumOfOrders= sumOfOrdersOnTruck;
            selectedTruckId = truck.id
          };}
        )
        return selectedTruckId;
      };

    return(
    
        <>
        <p>{order.id}</p>
        <p>{order.orderPriority ? "priority" : "non-priority"}</p>
        <p>{order.date}</p>
        {order.status==="FINISHED"?( <Link to={`/OrderPage/${order.id}`}>
            <button onClick={(()=>handlePackOrder())}>Pack Order</button>
        </Link>): "order completed"}
       
        </>

    );
}

export default Order;
