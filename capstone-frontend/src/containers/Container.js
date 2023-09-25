import { useState, useEffect, createContext } from "react";
import Homepage from "../components/HomePage/Homepage";
import OrderListPage from "../components/OrderListPage/OrderListPage";
import OrderPage from "../components/OrderPage/OrderPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Container = () => {
    const [orderList, setOrderList] = useState([]);
    const [employee, setEmployee] = useState(null)
    const [truckList, setTruckList]= useState([]);
    const [currentOrder, setCurrentOrder] = useState(null);


    const fetchAllOrders = async () => {
        const response = await fetch("http://localhost:8080/orders")
        const data = await response.json();
        setOrderList(data);
        console.log(data)
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
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/OrderListPage" element={<OrderListPage orderList={orderList}/>}/>
        <Route path="/OrderPage/:id" element={<OrderPage orderList={orderList}/>}/>

      </Routes>
    </div>
    </BrowserRouter>
    {/* <Homepage/>
    <OrderListPage orderList={orderList}/>
    <OrderPage orderList={orderList}/> */}
    </OrderContext.Provider></>
    );
}
export const OrderContext= createContext(null)
export default Container;