import OrderList from "./OrderList"

const OrderListPage = ({orderList, updateOrderStatus, truckList}) => {
    return (
        <OrderList orderList={orderList} updateOrderStatus={updateOrderStatus} truckList={truckList}/>
    )
}
export default OrderListPage;