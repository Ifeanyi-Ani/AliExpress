import { React, useContext } from 'react'
import { ContextData } from '../../context/ContextData'
import { IoTrashOutline, IoPencil } from 'react-icons/io5'
// import Modal from '../../components/modal/Modal'
// import EditProd from '../../components/product-form/EditProd'

const AdminProduct = () => {
    const { product, getProduct, openModal, setopenModal } = useContext(ContextData)


    const handleProdDelete = async (id, prodName, callback) => {
        try {
            const deleteProd = await fetch(`http://159.65.21.42:9000/product/${id}`, {
                method: "delete",
            })
            alert(`${prodName} successfully Deleted`)
            callback();
        } catch (err) {
            console.log(err);
        }
    }
    // const handleEditProduct = (items) => {
    //     setopenModal(true)
    // }
    return (
        <div className="main prodControl">
            <div className="header">
                <h2>Products</h2>
            </div>
            <div className='cardBox'>
                {product.map((data) => (
                    <div className="card" key={data._id}>
                        <div className='imgBx'>
                            <img src={`http://159.65.21.42:9000${data.image}`} alt="product" />
                            <div className='cardName'>
                                <h5>{data.name}</h5>
                                <span className='infoBx'>{data.description}</span>
                                <span className='infoBx'>Product price: ${data.price}</span>
                                <span className='infoBx'>Product in Store: {data.quantity}units</span>
                            </div>
                        </div>
                        <div className='actionBx'>
                            <IoPencil className="editBx" role="button" />

                            <IoTrashOutline className='deleteBx' onClick={() => handleProdDelete(data._id, data.name, getProduct)} role="button" />

                        </div>
                        {/* <Modal
                            open={openModal}
                            close={() => setopenModal(false)}
                            handleState1={() => handleEditProduct(2)}
                            title1="Update Product"
                            active={2}
                            className="open-modal">
                            <EditProd handleEditProduct={handleEditProduct()} />
                        </Modal> */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AdminProduct
