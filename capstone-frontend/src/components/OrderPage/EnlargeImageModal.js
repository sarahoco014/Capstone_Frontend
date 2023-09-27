import "./OrderPage.css";

const EnlargeImageModal = ({product, setIsImageModalOpen}) => {

    return(
    <div className="enlarge-image-modal" >
    <div className="image-modal-content">
    <figure>
        <img src={`/productImages/${product.id}.png`} />
        <figcaption>{product.notes}</figcaption>
    </figure>
    <button className="close" onClick={()=>setIsImageModalOpen(false)}>Close</button>
    </div>
</div>)
}

export default EnlargeImageModal;