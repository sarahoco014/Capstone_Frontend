import OrderList from "./OrderList"

const OrderListPage = ({orderList, updateOrderStatus}) => {
    return (
        <OrderList orderList={orderList} updateOrderStatus={updateOrderStatus}/>
    )
}
export default OrderListPage;