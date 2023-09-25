import { Link } from "react-router-dom";
import { OrderContext } from '../../containers/Container.js';
import { useContext } from "react";

const Homepage = () => {

    const {currentOrder} = useContext(OrderContext);

    return(
    <>
    <Link to="/OrderListPage">view order page</Link>
        <br/>
        {currentOrder? 
        (<Link to={`/OrderPage/${currentOrder.id}`}>view current order page </Link>): "no order on going yet"}
        </>)
}

export default Homepage;