
import { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(() => {
        fetch(`products.json`)
            .then(res => res.json())
            .then(data => setProducts(data))
        
    }, [])
    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1 :get id
        for (const id in storedCart) {
            //step 2 :get the product by using id.
            const addedProduct = products.find(product => product.id === id);
            //step 3 : get quantity of the product.
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4: add the added product to the save card .
                savedCart.push(addedProduct);
            }
            
        }
        // step 5 :set the cart.
        setCart(savedCart);
   
    }, [products])
    const handelAddToCart = (product) => {
        let newCart = [];
        // const newCart = [...cart, product];
        // If product doesn't exit in the cart then set quantity=1
        // If exit update the quantity by 1
        const exit = cart.find(pd => pd.id === product.id);
        if (!exit) {
            product.quantity = 1;
            newCart = [...cart, product];
        } else {
            exit.quantity = exit.quantity + 1;
            const remaining = cart.filter(pd => pd.id != product.id);
            newCart = [...remaining, exit];
        }
        setCart(newCart);
        addToDb(product.id)

    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product =>
                        <Product
                            product={product}
                            key={product.id}
                            handelAddToCart={handelAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;