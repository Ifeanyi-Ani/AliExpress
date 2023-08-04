import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import HomepageLink from '../../components/homepage-link/HomepageLink';
import { useState } from 'react';
import { useContext } from 'react';
import { ContextData } from '../../context/ContextData';
import { Modal } from '../../components/modal/Modal';
import ProdForm from '../../components/product-form/ProdForm';
import SignUp from '../../components/sign-up/SignUp';
import { SignIn } from '../../components/signin/SignIn';
import './adminnav.css';
const AdminNav = () => {
    const { checkAdmin, openModal, setopenModal } = useContext(ContextData);
    const [productForm, setProductForm] = useState(false)
    const [userForm, setUserForm] = useState(false)
    const [isActive, setisActive] = useState(1);
    const handleCreateProduct = (idx) => {
        setopenModal(true)
        setUserForm(false)
        setProductForm(true)
        setisActive(idx)
    }
    const handleRegisterUser = (idx) => {
        setopenModal(true)
        setProductForm(false)
        setUserForm(true)
        setisActive(idx)
    }
    return (
        <>

            {checkAdmin ? (
                <div>
                    <div className='admin-nav'>
                        <HomepageLink />
                        <ul>
                            <li><NavLink to='/admin'>Dashboard</NavLink></li>
                            <li><NavLink to="/admin/user">Users</NavLink></li>
                            <li><NavLink to="/admin/product">Products</NavLink></li>
                            <li><NavLink role='button' onClick={() => handleCreateProduct(2)}>Create</NavLink></li>
                            <li><NavLink role='button' onClick={() => handleRegisterUser(1)}>Register</NavLink></li>
                            <Modal
                                open={openModal}
                                close={() => setopenModal(false)}
                                handleState1={() => handleCreateProduct(2)}
                                handleState2={() => handleRegisterUser(1)}
                                title1="Product"
                                title2="User"
                                active={isActive}
                            >
                                {productForm && (<ProdForm />)}
                                {userForm && (<SignUp />)}
                            </Modal>
                        </ul>

                    </div>
                    <Outlet />
                </div>
            ) : (<div className='xenter'>
                <h2>Access Denied</h2>
                <p>Sign in As an Admin to Access the page</p>
                <SignIn />
            </div>)}



        </>
    )
}

export default AdminNav
