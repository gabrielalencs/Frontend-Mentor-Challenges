// React

import { useContext } from 'react';

// Data

import productData from '../../data/products.json';

// Context

import { CartProductsContext } from '../../context/CartProductsContext';


const ProductList = () => {

    const { productInformation, setProductInformation } = useContext(CartProductsContext);

    const incrementCounterProduct = (productName, productPrice, productImage) => {
        setProductInformation((prevProduct) => ({
            ...prevProduct,
            [productName]: {
                name: productName,
                quantity: (prevProduct[productName]?.quantity || 0) + 1,
                price: productPrice,
                image: productImage
            }
        }));
    };

    const decrementCounterProduct = (productName) => {
        setProductInformation((prevProduct) => {
            const currentQuantity = prevProduct[productName]?.quantity || 0;

            if (currentQuantity > 1) {
                return {
                    ...prevProduct,
                    [productName]: {
                        ...prevProduct[productName],
                        quantity: currentQuantity - 1,
                    },
                };
            } else {
                const updatedProducts = { ...prevProduct };
                delete updatedProducts[productName];
                return updatedProducts;
            }
        });
    };


    return (
        <div className='max-w-[700px]'>
            <h1 className="text-3xl font-bold text-brown-primary">Desserts</h1>
            <div className="mt-10 grid gap-x-12 gap-y-16 min-[543px]:grid-cols-2 min-[640px]:grid-cols-1 min-[867px]:grid-cols-2 lg:grid-cols-3 lg:gap-x-9">
                {
                    productData.map(product => (
                        <div key={product.name} className="max-w-[350px] h-max lg:max-w-full lg:w-full">
                            <div>
                                {
                                    <picture>
                                        <source srcSet={product.image.desktop} media="(min-width: 992px)" />
                                        <source srcSet={product.image.tablet} media="(min-width: 768px)" />
                                        <source srcSet={product.image.mobile} media="(max-width: 768px)" />
                                        <img
                                            src={product.image.thumbnail}
                                            alt="imagem of product"
                                            className={`rounded-xl w-full border-2 duration-300 ${productInformation[product.name]?.quantity > 0 ? 'border-[#C73A0F]' : ''}`}
                                        />
                                    </picture>
                                }

                                <button
                                    className={`buttonAddToCart group ${productInformation[product.name]?.quantity > 0 ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'}`}
                                    onClick={() => incrementCounterProduct(product.name, product.price, product.image.thumbnail)}>
                                    <img src="./assets/images/icon-add-to-cart.svg" alt="icon cart" />
                                    <span className='text-[17px] duration-300 group-hover:text-[#CD5E43]'>Add to Cart</span>
                                </button>

                                <button className={`buttonCounterProduct ${productInformation[product.name]?.quantity > 0 ? 'pointer-events-auto opacity-100 z-10' : 'pointer-events-none opacity-0'}`}>
                                    <img
                                        src="./assets/images/icon-decrement-quantity.svg"
                                        alt="icon decrement"
                                        className='border-[1px] border-white w-6 h-6 rounded-full p-[5px]'
                                        onClick={() => decrementCounterProduct(product.name, product.price)}
                                    />
                                    <span className='text-lg font-medium text-white'>{productInformation[product.name]?.quantity || 0}</span>
                                    <img
                                        src="./assets/images/icon-increment-quantity.svg"
                                        alt="icon increment"
                                        className='border-[1px] border-white w-6 h-6 rounded-full p-[5px]'
                                        onClick={() => incrementCounterProduct(product.name, product.price, product.image.thumbnail)}
                                    />
                                </button>
                            </div>

                            <div className='mt-[-50px]'>
                                <span className='text-[#8F7674]'>{product.category}</span>
                                <h3 className='text-xl text-brown-primary font-semibold'>{product.name}</h3>
                                <span className='text-[#CD5E43] text-lg font-semibold'>${product.price.toFixed(2)}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductList