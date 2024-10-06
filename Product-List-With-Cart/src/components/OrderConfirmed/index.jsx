// React

import { useContext, useEffect, useState } from 'react';

// Context

import { CartProductsContext } from '../../context/CartProductsContext';


const OrderConfirmed = ({ orderConfirmed }) => {

    const { productInformation, setProductInformation } = useContext(CartProductsContext);
    const [orderValue, setOrderValue] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.querySelector('body').classList.add('overflow-hidden')
        setOrderValue(document.querySelector('.priceTotal').textContent)

        return () => document.querySelector('body').classList.remove('overflow-hidden')
    }, []);

    const finalizeOrder = () => {
        orderConfirmed(false)
        setProductInformation({});
    };


    return (
        <div className='px-5'>
            <div className='absolute top-0 right-0 w-screen min-h-screen bg-black opacity-30 z-50'></div>
            <div className='absolute top-14 left-[50%] z-50 translate-x-[-50%] bg-white opacity-100 rounded-xl px-5 py-10 max-w-[350px] w-full md:max-w-[500px]'>
                <div>
                    <img src="./assets/images/icon-order-confirmed.svg" alt="Icon Order Confirmed" />
                    <h1 className='mt-4 text-3xl font-bold'>Order Confirmed</h1>
                    <p className='text-[#87635A] mt-3 font-medium'>We hope you enjoy your food!</p>
                </div>

                <div className='bg-[#F4EDEB] rounded-xl mt-7 px-5 py-7'>
                    <div className='flex flex-col gap-5 h-32 overflow-scroll overflow-x-hidden'>
                        {
                            Object.entries(productInformation).map(([key, product]) => (
                                <div key={key} className='flex justify-between items-center pb-5 border-[2px] border-r-0 border-t-0 border-l-0 border-b-[#ece0db] mr-5'>
                                    <div className='flex items-center gap-4'>
                                        <img
                                            src={product.image}
                                            alt="image of product"
                                            className='h-16 rounded-lg'
                                        />
                                        <div>
                                            <p className='font-medium'>{product.name}</p>
                                            <span className='mr-5 font-medium text-[#CD5E43]'>{product.quantity}x</span>
                                            <span className='text-sm text-slate-600'>${product.price.toFixed(1)}</span>
                                        </div>
                                    </div>

                                    <div>
                                        <span className='text-xl font-medium'>${product.price.toFixed(2)}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className='mt-7 flex items-center justify-between'>
                        <span className='text-lg font-semibold'>Order Total:</span>
                        <span className="font-bold text-xl">{orderValue}</span>
                    </div>

                    <div className="mt-9">
                        <button
                            className="bg-[#C73A0F] text-white font-semibold text-lg w-full rounded-3xl p-3 duration-300 hover:opacity-80"
                            onClick={finalizeOrder}>
                            Start New Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderConfirmed