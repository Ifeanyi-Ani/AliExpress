import React from 'react'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextData } from '../../context/ContextData'
import './dashbord.css'

const Dashboard = () => {
    const { user, product, cart } = useContext(ContextData)

    return (
        <div className="main">
            <div className="cardBox">
                <Link to="/admin/product" className="card">
                    <div>
                        <div className="numbers">{product.length}</div>
                        <div className="cardName">Products</div>
                    </div>

                    <div className="iconBx">
                        {/* <ion-icon name="eye-outline"></ion-icon> */}
                    </div>
                </Link>

                <Link to="/admin/user" className="card">
                    <div>
                        <div className="numbers">{user.length}</div>
                        <div className="cardName">Users</div>
                    </div>

                    <div className="iconBx">
                        {/* <ion-icon name="cart-outline"></ion-icon> */}
                    </div>
                </Link>

                <div className="card">
                    <div>
                        <div className="numbers">{cart.length}</div>
                        <div className="cardName">Cart</div>
                    </div>

                    <div className="iconBx">
                        {/* <ion-icon name="chatbubbles-outline"></ion-icon> */}
                    </div>
                </div>
            </div>

            <div className="dashDtx">
                <div className="recentOrders">
                    <div className="cardHeader">
                        <h2>Recent Products</h2>
                        <Link to="/admin/product" className="btn">View All</Link>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <td>Description</td>
                                <td>Price</td>
                                <td>In store</td>
                                <td>Name</td>
                            </tr>
                        </thead>

                        <tbody>
                            {product.length ? [...product].reverse().slice(0, 10).map((data, idx) => (
                                <tr key={idx}>
                                    <td>{data.description}</td>
                                    <td>${data.price}</td>
                                    <td>{data.quantity}units</td>
                                    <td>{data.name}</td>
                                </tr>
                            )) : (<tr><td>Product is Empty</td></tr>)
                            }
                        </tbody>
                    </table>
                </div>

                <div className="recentCustomers">
                    <div className="cardHeader">
                        <h2>Recent Users</h2>
                    </div>

                    <table>
                        <tbody>
                            {user.length ? [...user].reverse().slice(0, 10).map((data, idx) => (
                                <tr key={idx}>

                                    <td>
                                        <h4>{data.name} <br /> <span>{data.email}</span></h4>
                                    </td>
                                </tr>
                            )) : (<tr><td>user list is empty</td></tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Dashboard
