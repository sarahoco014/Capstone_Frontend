import { useState, useEffect } from "react";


const Container = () => {
    const [orderList, setOrderList, employee, setEmployee, truckList, setTruckList] = useState([]);

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


return (
    <>
    <Homepage/>
    <OrderListPage orderList={orderList}/>
    <OrderPage/>
    
    </>

);
}

export default Container;