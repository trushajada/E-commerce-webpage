import React, { useState, useEffect } from "react";
import product1 from '../../assets/images/product1.png';
import product2 from '../../assets/images/product2.png';
import product3 from '../../assets/images/product3.png';
import { FiClock } from "react-icons/fi";
const Orderproduct = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [isNotificationVisible, setNotificationVisible] = useState(false);
    const [orders, setOrders] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isHistoryOpen, setHistoryOpen] = useState(false)

    useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem("orders"));
        if (Array.isArray(storedOrders)) {
            setOrders(storedOrders);
        }
    }, []);

    useEffect(() => {
        if (orders.length > 0) {
            localStorage.setItem("orders", JSON.stringify(orders));
        }
    }, [orders]);

    const openPopup = (product) => {
        setSelectedProduct(product);
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
        setSelectedProduct(null);
    };

    const submitOrder = () => {
        if (selectedProduct) {
            const newOrder = {
                id: Date.now(),
                name: selectedProduct.title,
                price: "$30",
            };

            setOrders((prevOrders) => [...prevOrders, newOrder]);
            setNotificationVisible(true);
            closePopup();

            setTimeout(() => {
                setNotificationVisible(false);
            }, 3000);
        }
    };

    const Ware = [
        {
            id: 1,
            img: product1,
            title: "Casual Wear",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sed libero dicta, dolor quam dolorum at non pariatur!"
        },
        {
            id: 2,
            img: product2,
            title: "Printed shirt",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sed libero dicta, dolor quam dolorum at non pariatur!"
        },
        {
            id: 3,
            img: product3,
            title: "Women shirt",
            description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ];

    return (
        <section className="relative bg-gray-100 dark:bg-gray-900 min-h-screen flex py-5 px-3">
            <div className="container mx-auto p-3 py-5 hero flex-grow items-center justify-center">
                <div className="py-5">
                    <span className="text-[#ed8900]">Top Rated Products for you</span>
                    <h1 className="text-3xl font-bold">Best Products</h1>
                    <p className="text-gray-400 font-semibold text-sm mt-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                        asperiores modi Sit asperiores modi
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-5 mt-5 px-5">
                    {Ware.map((item) => (
                        <div key={item.id} className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-[#ed8900] hover:text-white relative shadow-xl duration-300 group p-6 max-w-[300px] mx-auto max-h-[340px]">
                            <div className="h-[100px]">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="max-w-[140px] mx-auto transform group-hover:scale-105 duration-300 drop-shadow-md -translate-y-20 object-cover rounded-full"
                                />
                            </div>
                            <div className="p-2 text-center">
                                <h3 className="text-xl font-bold mb-2 text-center">{item.title}</h3>
                                <p className="text-center text-xs">{item.description}</p>
                                <button className="bg-[#ed8900] mt-4 py-2 px-4 w-full text-white rounded-full hover:bg-white hover:text-[#ed8900] transition duration-300" onClick={() => openPopup(item)}>Order Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* history sectiom  */}
            <button
                onClick={() => setHistoryOpen(!isHistoryOpen)}
                className="fixed top-4 right-4 bg-gray-700 text-white p-3 rounded-full shadow-lg z-30"
            >
                <FiClock size={24} />
            </button>

            {isHistoryOpen && (
                <div className="fixed top-0 right-0 bg-white dark:bg-gray-800 shadow-xl w-[300px] h-full p-4 overflow-y-auto z-20">
                    <h2 className="text-xl font-bold mb-4">Order History</h2>
                    {orders.length > 0 ? (
                        <ul>
                            {orders.map((order) => (
                                <li
                                    key={order.id}
                                    className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 rounded p-2 mb-2"
                                >
                                    <div>
                                        <p className="font-bold">{order.name}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {order.price}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => deleteOrder(order.id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Delete
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-600 dark:text-gray-400">No orders yet.</p>
                    )}
                </div>
            )}

            {/* popup section  */}


            {isPopupOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-10">
                    <div className="bg-white rounded-lg p-6 shadow-xl w-[300px]">
                        <h2 className="text-xl font-bold">Product Details</h2>
                        {selectedProduct && (
                            <>
                                <p className="mt-2 text-gray-700">Product Name: {selectedProduct.title}</p>
                                <p className="mt-2 text-gray-700">Price: $30</p>
                                <p className="mt-2 text-gray-700">Description: {selectedProduct.description}</p>
                            </>
                        )}
                        <button onClick={submitOrder} className="bg-primary bg-gray-300 text-gray-800 py-2 px-4 rounded mt-4 w-full">
                            Submit Order
                        </button>
                        <button onClick={closePopup} className="bg-gray-300 text-gray-800 py-2 px-4 rounded mt-2 w-full">
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {/* notification  */}
            {isNotificationVisible && (
                <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded shadow-lg z-20">
                    Order submitted successfully!
                </div>
            )}
        </section>
    );
};

export default Orderproduct;