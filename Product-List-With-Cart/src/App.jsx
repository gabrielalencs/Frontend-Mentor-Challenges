import { useState } from 'react';
import './App.css';

import Cart from './components/Cart';
import ProductList from './components/ProductList';
import OrderConfirmed from './components/OrderConfirmed';

const App = () => {

    const [orderConfirmed, setOrderConfirmed] = useState(false)

    return (
        <>
            <ProductList />
            <Cart orderConfirmed={setOrderConfirmed} />
            {
                orderConfirmed && <OrderConfirmed orderConfirmed={setOrderConfirmed} />
            }
            {/* <OrderConfirmed /> */}
        </>
    )
}

export default App