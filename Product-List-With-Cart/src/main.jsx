import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import { CartProductsProvider } from './context/CartProductsContext.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CartProductsProvider>
            <App />
        </CartProductsProvider>
    </StrictMode>
)