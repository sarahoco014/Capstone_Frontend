import { Link } from "react-router-dom";
import { OrderContext } from '../../containers/Container.js';
import { useContext } from "react";
import TruckCapacityGraph from './TruckCapacityGraph';

const Homepage = ({truckList}) => {

    const {currentOrder} = useContext(OrderContext);

    return(
    <div>
            <Link to="/OrderListPage">view order page</Link>
                <br/>
                {currentOrder? 
            (<Link to={`/OrderPage/${currentOrder.id}`}>view current order page </Link>): "no order on going yet"}
            <TruckCapacityGraph truckList={truckList}/>
        </div>)
}

export default Homepage;