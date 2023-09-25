import { useContext } from "react";
import { Link } from "react-router-dom"
import { OrderContext } from '../../containers/Container';

const Order = ({order, updateOrderStatus, truckList}) => {

    const {setCurrentOrder}=useContext(OrderContext);
    console.log("hello")

    const handlePackOrder= async () =>{
        console.log("handling pack order button");
        setCurrentOrder(order);
        const truckId = assignTruck();
        await updateOrderStatus(order.id, truckId, "ONGOING");
    }

    console.log(truckList);

    const calculateProductsSumSize = (orderToCalculate) => {
        let total = 0;
        orderToCalculate.products.map((product)=>{
            ((product.size="SMALL")?total+=3 :(product.size="MEDIUM")?total+=7 : total+=10)
            console.log(total);
    })
    return total;
    
    }

    const assignTruck = () => {
        truckList.map((truck) => {
            let sumOfOrdersOnTruck = truck.orders.map((orderToCalculate) => {
                calculateProductsSumSize(orderToCalculate);
            })
            if ((sumOfOrdersOnTruck + calculateProductsSumSize(order)) < truck.maxCapacity) {
                return truck.id;
            }
        })
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
