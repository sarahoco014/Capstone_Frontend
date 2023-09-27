import { Link } from "react-router-dom";
import { OrderContext } from '../../containers/Container.js';
import { useContext } from "react";
import Sidebar from "./Sidebar.js";
import TruckStatus from "./TruckStatus.js";



const Homepage = ({truckList}) => {

    const {currentOrder} = useContext(OrderContext);

    return(
    <div>
        <TruckStatus truckList = {truckList}/>

        </div>)
}

export default Homepage;