import { useContext } from "react";
import { OrderContext } from '../../containers/Container.js';


const ConfirmOrderModal=({handleConfirmOrder})=> {
    const {currentOrder}=useContext(OrderContext);
    
    return( <div className="confirm-modal" >
    <div className="confirm-modal-content">
        <h2>Please load into truck {currentOrder.truck.id}</h2>
        <div className="iframe"><iframe src="https://giphy.com/embed/QyKHaxxc4XvYo1jt4b"></iframe><div className="iframe-overlay"></div></div>
        <button className="confirm" onClick={()=>handleConfirmOrder()}>
          Confirm
        </button>
    </div>
</div>)
}
export default ConfirmOrderModal;