import OrderList from "./OrderList"
import "./OrderListPage.css";

const OrderListPage = ({orderList, updateOrderStatus, truckList}) => {
    return (
        <>
        <OrderList orderList={orderList} updateOrderStatus={updateOrderStatus} truckList={truckList}/>
        </>
    )
}
export default OrderListPage;