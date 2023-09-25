import { useState, useEffect, createContext } from "react";
import Homepage from "../components/HomePage/Homepage";
import OrderListPage from "../components/OrderListPage/OrderListPage";
import OrderPage from "../components/OrderPage/OrderPage";

const Container = () => {
    const [orderList, setOrderList, employee, setEmployee, truckList, setTruckList, currentOrder, setCurrentOrder] = useState([]);
    const OrderContext= createContext(null)

    const fetchAllOrders = async () => {
        const response = await fetch("http://localhost:8080/orders")
        const data = await response.json();
        setOrderList(data);
    }

    const fetchEmployee = async () => {
        const response = await fetch("http://localhost:8080/employees/1")
        const data = await response.json();
        setEmployee(data);
    }
    
    const fetchAllTrucks = async () => {
        const response = await fetch("http://localhost:8080/trucks")
        const data = await response.json();
        setTruckList(data);
    }

    useEffect ( () => {
        fetchAllOrders();
    }, []);

    useEffect ( () => {
        fetchAllTrucks();
    }, []);

    useEffect ( () => {
        fetchEmployee();
    }, []);

    const contextValue={currentOrder,setCurrentOrder}

return (
    <><OrderContext.Provider value={contextValue}>
    <Homepage/>
    <OrderListPage orderList={orderList}/>
    <OrderPage orderList={orderList}/>
    </OrderContext.Provider></>
    );
}

export default Container;