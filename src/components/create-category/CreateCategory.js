import React from 'react'
import { useState } from 'react'

export const CreateCategory = () => {
    const [addCategory, setAddCategory] = useState({
        name: ""
    })
    const handleAddCate = async (event) => {
        event.preventDefault();
        if (!addCategory.name) {
            return
        }
        try {
            const postCategory = await fetch("http://159.65.21.42:9000/category", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(addCategory)
            })
            alert("New category is Created")
            console.log(postCategory);
            console.log(addCategory);
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <form action="">
                <div className="form-group">
                    <input type="text" name="" id=""
                        value={addCategory.name}
                        onChange={(e) => setAddCategory({ ...addCategory, name: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <button onClick={handleAddCate}>Add Category</button>
                </div>
            </form>
        </div>
    )
}
