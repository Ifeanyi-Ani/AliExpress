import React from 'react'
import { useState, useContext } from 'react'
import { ContextData } from '../../context/ContextData'
import { IoTrashOutline, IoPencil } from 'react-icons/io5'
import './adminuser.css'

const AdminUser = () => {
    const { user, getUsers } = useContext(ContextData);
    const handleUserDel = async (id, identity, callback) => {
        try {
            const deleteUser = await fetch(`http://159.65.21.42:9000/user/${id}`, {
                method: "delete",
            })
            alert(`User: ${identity}, is successfully delete`);
            callback()
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="main">
            <div className="header">
                <h2>Users</h2>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((data, idx) => (
                        <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>{data.name}</td>
                            <td>{data.phone}</td>
                            <td>{data.email}</td>
                            <td className='buttonBx'><IoPencil role="button" /><IoTrashOutline role="button" onClick={() => handleUserDel(data._id, data.name, getUsers)} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AdminUser
