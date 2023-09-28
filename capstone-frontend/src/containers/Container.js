import { useState, useEffect, createContext } from "react";
import Homepage from "../components/HomePage/Homepage";
import OrderListPage from "../components/OrderListPage/OrderListPage";
import OrderPage from "../components/OrderPage/OrderPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Sidebar from "../components/HomePage/Sidebar";
import Box from '@mui/material/Box';

const Container = () => {
    const [orderList, setOrderList] = useState([]);
    const [employee, setEmployee] = useState(null)
    const [truckList, setTruckList]= useState([]);
    const [currentOrder, setCurrentOrder] = useState(null);


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

    const updateOrderStatus = async (orderId, truckId, status) => {
        const response = await fetch(`http://localhost:8080/orders/updateOrderStatus?orderId=${orderId}
                                        &employeeId=1&truckId=${truckId}&status=${status}`, {
                                            method: "PATCH",
                                            headers: {
                                                "Content-Type" : "application/json"
                                            }
                                            
                                        })
        fetchAllOrders();
        fetchAllTrucks();
        console.log("currentOrder:" + currentOrder);
        }

    const decreaseStockLevel = async () => {
        const response = await fetch(`http://localhost:8080/products/decreaseStockLevel?orderId=${currentOrder.id}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            }})
        fetchAllOrders();
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

//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const handleSidebarOpen = () => {
//     setIsSidebarOpen(true);
//   };

//   const handleSidebarClose = () => {
//     setIsSidebarOpen(false);
//   };
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

return (
    <><OrderContext.Provider value={contextValue}>
    <BrowserRouter>
    <div className="App">
        <Sidebar    open={open}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}/>
        <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          transition: 'margin-left 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
          marginTop: '40px' ,
          marginLeft: open ? `240px` : `64px`, // Adjust the margin as needed
        }}
      >
      <Routes>
        <Route path="/" element={<Homepage truckList={truckList} orderList={orderList} />}/>
        <Route path="/OrderListPage" element={<OrderListPage orderList={orderList} 
        updateOrderStatus={updateOrderStatus}
        truckList={truckList}/>}/>
        <Route path="/OrderPage/:id" element={<OrderPage orderList={orderList} 
        updateOrderStatus={updateOrderStatus}
        decreaseStockLevel={decreaseStockLevel} />}/>

      </Routes></Box>
    </div>
    </BrowserRouter>
    </OrderContext.Provider></>
    );
}
export const OrderContext= createContext(null)
export default Container;