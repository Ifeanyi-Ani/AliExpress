import React from 'react'
import { useState, useContext } from 'react'
import { ContextData } from '../../context/ContextData'

const EditProd = ({ handleEditProduct }) => {
    const { getProduct, setopenModal } = useContext(ContextData);
    const emptyInput = {
        name: "",
        category: "",
        price: "",
        quantity: "",
        description: "",
        image: ""

    }
    handleEditProduct = (data) => {
        console.log(data);
    }
    const [prodForm, setProdForm] = useState(emptyInput);
    const [check, setCheck] = useState(false);
    const handleCreateProduct = async (event, callback) => {
        event.preventDefault()
        if (!prodForm.name || !prodForm.category || !prodForm.description || !prodForm.price || !prodForm.quantity || !prodForm.image) {
            return setCheck(true)
        }

        const formData = new FormData()
        formData.append("name", prodForm.name);
        formData.append("price", prodForm.price);
        formData.append("category", prodForm.category);
        formData.append("quantity", prodForm.quantity);
        formData.append("description", prodForm.description);
        formData.append("image", prodForm.image);

        try {
            const postResult = await fetch("http://159.65.21.42:9000/create/product", {
                method: "post",
                body: formData
            })
            alert('Product successfully created')
            setopenModal(false)
            callback()
        } catch (err) {
            console.log(err);
        }
        setProdForm(emptyInput);
    }
    return (
        <div className='prod-form'>
            <form action="">
                <div className="form-group">
                    <input type="text" name="" id="" placeholder='Product Name'
                        value={prodForm.name}
                        onChange={(e) => setProdForm({ ...prodForm, name: e.target.value })}
                    />
                    {check && prodForm.name === "" ? (<span>product name is required</span>) : null}
                </div>
                <div className="form-group">
                    <select name="" id=""
                        value={prodForm.category}
                        onChange={(e) => setProdForm({ ...prodForm, category: e.target.value })}
                    >
                        <option value="">select Category</option>
                        <option value="ultimate_product">Ultimate Product</option>

                    </select>
                    {check && prodForm.category === "" ? (<span>product category is required</span>) : null}
                </div>
                <div className="form-group">
                    <input type="Number" name="" id="" placeholder='Price'
                        value={prodForm.price}
                        onChange={(e) => setProdForm({ ...prodForm, price: e.target.value })}
                    />
                    {check && prodForm.price === "" ? (<span>product price is required</span>) : null}
                </div>
                <div className="form-group">
                    <input type="Number" name="" id="" placeholder='Quantity'
                        value={prodForm.quantity}
                        onChange={(e) => setProdForm({ ...prodForm, quantity: e.target.value })}
                    />
                    {check && prodForm.quantity === "" ? (<span>product quantity is requird</span>) : null}
                </div>
                <div className="form-group">
                    <textarea name="" id="" cols="30" rows="5"
                        value={prodForm.description}
                        onChange={(e) => setProdForm({ ...prodForm, description: e.target.value })}
                    ></textarea>
                    {check && prodForm.description === "" ? (<span>product description is required</span>) : null}
                </div>
                <div className="form-group">
                    <input type="file" name="" id=""
                        onChange={(e) => setProdForm({ ...prodForm, image: e.target.files[0] })}
                    />
                    {check && prodForm.image === "" ? (<span>product image is required</span>) : null}
                </div>
                <div className="form-group">
                    <button onClick={(e) => handleCreateProduct(e, getProduct)}>Create Product</button>
                </div>

            </form>
        </div>
    )
}

export default EditProd
