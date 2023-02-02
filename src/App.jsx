import { api } from "./services/api";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { useEffect, useState } from "react";
import { ProductsList } from "./Components/ProductsList/ProductsList";
import { Cart } from "./Components/Cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const localProducts = localStorage.getItem("@PRODUCTSHAMBURGUERIA");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState(
    localProducts ? JSON.parse(localProducts) : []
  );
  const [search, setSearch] = useState('')

  const searchProducts = products.filter((product)=>{
      return search === '' ? true : (product.name.toLowerCase()).includes(search.toLocaleLowerCase())
  })

  useEffect(() => {
    async function loadProductsData() {
      try {
        setLoading(true);
        const response = await api.get("products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    loadProductsData();
  }, []);

  useEffect(() => {
    localStorage.setItem("@PRODUCTSHAMBURGUERIA", JSON.stringify(cartProducts));
  }, [cartProducts]);
  
  function addToCart(product) {
    setCartProducts([...cartProducts, product]);
    toast.success("Seu produto foi adicionado ao carrinho");
  }

  function removeToCart(productId) {
    const newCartProducts = cartProducts.filter(
      (product) => product.id !== productId
    );
    setCartProducts(newCartProducts);
    localStorage.setItem("@PRODUCTSHAMBURGUERIA", JSON.stringify(newCartProducts))
    toast.warning('Você removeu o produto do carrinho')
    
  }

  // function total(products){
  //     const cartTotal = cartProducts.reduce((previousValue, currentValue)=>{
  //       return previousValue + currentValue.price
  //     },0)
  // }

  return (
    <div className="App">
    
      {loading ? (
        <p className="loadingMsg">Carregando...</p>
      ) : (
        <>
          <Header setSearch={setSearch} />
          <ProductsList addToCart={addToCart} searchProducts={searchProducts} />

          <Cart
            addToCart={addToCart}
            removeToCart={removeToCart}
            products={products}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          />
        
        </>
      )}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
export default App;
