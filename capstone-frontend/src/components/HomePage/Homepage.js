import { Link } from "react-router-dom";
import { OrderContext } from '../../containers/Container.js';
import { useContext } from "react";
import Sidebar from "./Sidebar.js";
import TruckStatus from "./TruckStatus.js";
import Graph from "./Graph.js";
import './Homepage.css';



const Homepage = ({truckList, orderList}) => {

    const {currentOrder} = useContext(OrderContext);

    return(
    <div>
        <h2>Order Status</h2>
        <div className = "pie-chart">
        <Graph orderList={orderList}/> </div>
        <h2>Truck Status</h2>
        <div className = "truck-status-bars">
        
        <TruckStatus truckList = {truckList}/> </div>
        </div>)
}

export default Homepage;