import { getShoppingCart } from "../../utilities/fakedb";

const cartProductsLoaders =async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();
    // if cart data in database ,have to use async await
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
        const addedProduct = products.find(pd => pd.id === id);
        if (addedProduct) {
            const product = storedCart[id];
            addedProduct.quantity = product;
            savedCart.push(addedProduct);
        }
    }
    return savedCart;
}
export default cartProductsLoaders;