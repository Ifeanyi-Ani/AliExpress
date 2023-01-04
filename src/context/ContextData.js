import { useState, createContext, useEffect } from "react";

export const ContextData = createContext();
const DataProvider = (props) => {
    const [openModal, setopenModal] = useState(false);
    const [user, setUser] = useState([]);
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const CartData = localStorage.getItem("cartStore");
    const [checkAdmin, setCheckAdmin] = useState(false);
    const [isLoggedin, setisLoggedin] = useState(false)
    const [loggedUser, setLoggedUser] = useState([])
    const userStore = localStorage.getItem("Loggedin")
    const getLoggedin = () => {
        if (userStore) {
            let currentUser = JSON.parse(userStore);
            setLoggedUser(currentUser)
            setisLoggedin(true)
        }
    }
    const getUsers = async () => {
        try {
            const res = await fetch("http://159.65.21.42:9000/users")
            const userData = await res.json()
            setUser(userData)
        }
        catch (err) {
            console.log(err);
        }
    }
    const getProduct = async () => {
        try {
            const fetchProd = await fetch("http://159.65.21.42:9000/products")
            const data = await fetchProd.json();
            const filterData = data.filter((item) => item.category === "ultimate_product");

            setProduct(filterData)
        } catch (err) {
            console.log(err);
        }
    }

    const getCart = () => {
        if (CartData) {
            let cartList = JSON.parse(CartData);
            setCart(cartList)
        }
    }
    const addToCart = item => {
        let initialCart = [...cart];
        let checkProd = initialCart.find(prod => prod._id === item._id);
        if (checkProd) {
            alert("item already in cart")
        } else {
            let newItem = { ...item, order_quantity: 1, total_price: item.price }
            initialCart.push(newItem);
            setCart(initialCart);
            localStorage.setItem("cartStore", JSON.stringify(initialCart));
        }
    }

    const increaseCartQty = (item) => {
        let initialCart = [...cart];
        initialCart.find((cartItem) => {
            if (cartItem._id === item._id) {
                cartItem.order_quantity += 1;
                cartItem.total_price = cartItem.order_quantity * cartItem.price;
            }
        });
        setCart(initialCart);
        localStorage.setItem("cartStore", JSON.stringify(initialCart));
    };

    const decreaseCartQty = (item) => {
        let initialCart = [...cart];
        initialCart.find((cartItem) => {
            if (cartItem._id === item._id) {
                if (cartItem.order_quantity > 1) {
                    cartItem.order_quantity -= 1;
                    cartItem.total_price = cartItem.order_quantity * cartItem.price;
                }
            }
        });
        setCart(initialCart);
        localStorage.setItem("cartStore", JSON.stringify(initialCart));
    };

    const deleteCartItem = (item) => {
        let initialCart = [...cart];
        let cartItems = initialCart.filter((cartItem) => {
            return cartItem._id !== item._id;
        });
        setCart(cartItems);
        localStorage.setItem("cartStore", JSON.stringify(cartItems));
    };
    let GrandTotalPrice = [...cart]
        .map(({ total_price }) => total_price)
        .reduce((total, initial) => {
            return total + initial;
        }, 0);
    useEffect(() => {
        getUsers()
        getProduct()
        getCart()
        getLoggedin()
    }, []);

    const dataValue = {
        getUsers,
        user,
        product,
        getProduct,
        cart,
        addToCart,
        increaseCartQty,
        decreaseCartQty,
        deleteCartItem,
        GrandTotalPrice,
        checkAdmin,
        setCheckAdmin,
        isLoggedin,
        setisLoggedin,
        loggedUser,
        setLoggedUser,
        openModal,
        setopenModal

    }
    return (
        <ContextData.Provider
            value={dataValue}>
            {props.children}
        </ContextData.Provider>
    )
}
export default DataProvider;