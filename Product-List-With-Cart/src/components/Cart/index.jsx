// React

import { useContext } from "react";

// Context

import { CartProductsContext } from "../../context/CartProductsContext";


const Cart = ({ orderConfirmed }) => {

    const { productInformation, setProductInformation } = useContext(CartProductsContext);
    const sumOfItems = Object.values(productInformation).reduce((acc, value) => acc + value.quantity, 0);

    const removeItemFromCart = (productName) => {
        setProductInformation((prevProduct) => {
            const updatedProducts = { ...prevProduct };
            delete updatedProducts[productName];
            return updatedProducts;
        });
    };

    const calculateTotal = () => {
        return Object.values(productInformation).reduce((total, product) => {
            return total + product.price * product.quantity;
        }, 0).toFixed(2);
    };

    
    return (
        <div className="bg-[#FCF9F7] rounded-xl h-max px-5 py-7 max-w-[380px] w-full mx-auto">
            <div>
                <h2 className="text-[#CD5E43] font-bold text-2xl">Your Cart (<span>{sumOfItems}</span>)</h2>
            </div>
            {
                Object.keys(productInformation).length === 0 ? (
                    <div className="text-center mt-6">
                        <img
                            src="./assets/images/illustration-empty-cart.svg"
                            alt="Illustration Empty Cart"
                            className="mx-auto"
                        />
                        <p className="font-semibold text-[#87635A] mt-5">Your added items will appear here</p>
                    </div>
                ) : (
                    <div className="mt-6">
                        <div className="flex flex-col gap-5">
                            {
                                Object.entries(productInformation).map(([key, product]) => (
                                    <div key={key} className="flex items-center justify-between pb-3 border-[2px] border-r-0 border-t-0 border-l-0 border-b-[#f3ebe8]">
                                        <div>
                                            <h3 className="font-semibold">{product.name}</h3>
                                            <div className="flex items-center gap-4 mt-1">
                                                <span className="text-[#CD5E43] font-semibold text-lg">{product.quantity}x</span>
                                                <span className="text-sm text-slate-600">@${product.price.toFixed(1)}</span>
                                                <span className="text-sm text-slate-600">${product.price.toFixed(2)}</span>
                                            </div>
                                        </div>

                                        <div className="border-[1px] border-[#dab4aa] cursor-pointer p-1 rounded-full" onClick={() => removeItemFromCart(product.name)}>
                                            <img src="./assets/images/icon-remove-item.svg" alt="icon remove" />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="mt-8">
                            <div className="flex items-center justify-between">
                                <span>Order Total:</span>
                                <span className="font-bold text-xl priceTotal">${calculateTotal()}</span>
                            </div>

                            <div className="mt-6 flex items-center justify-center gap-4 bg-[#F4EDEB] rounded-xl p-4">
                                <img src="./assets/images/icon-carbon-neutral.svg" alt="icon Carbon Neutral" />
                                <span className="font-semibold text-[#87635A]">This is a <span className="text-black">carbon-neutral</span> delivery</span>
                            </div>

                            <div className="mt-5">
                                <button
                                    className="bg-[#C73A0F] text-white font-semibold text-lg w-full rounded-3xl p-3 duration-300 hover:opacity-80"
                                    onClick={() => orderConfirmed(true)}>
                                    Confirm Order
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Cart