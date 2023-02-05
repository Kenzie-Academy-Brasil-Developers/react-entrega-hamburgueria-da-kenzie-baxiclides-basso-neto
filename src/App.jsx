import { api } from "./services/api";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { useEffect, useState } from "react";
import { ProductsList } from "./Components/ProductsList/ProductsList";
import { Cart } from "./Components/Cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const localProducts = localStorage.getItem("@PRODUCTSHAMBURGUERIA");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState(
    localProducts ? JSON.parse(localProducts) : []
  );
  const [search, setSearch] = useState("");

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

  const searchProducts = products.filter((product) => {
    return search === ""
      ? true
      : product.name.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    localStorage.setItem("@PRODUCTSHAMBURGUERIA", JSON.stringify(cartProducts));
  }, [cartProducts]);

  function addToCart(currentProduct) {
    if (!cartProducts.some((product) => product.id === currentProduct.id)) {
      setCartProducts([...cartProducts, currentProduct]);
      toast.success("Seu produto foi adicionado ao carrinho");
    } else {
      toast.error("Esse produto já foi adicionado no carrinho de compras");
    }
  }

  function removeToCart(productId) {
    const newCartProducts = cartProducts.filter(
      (product) => product.id !== productId
    );
    setCartProducts(newCartProducts);
    localStorage.setItem(
      "@PRODUCTSHAMBURGUERIA",
      JSON.stringify(newCartProducts)
    );
    toast.warning("Você removeu o produto do carrinho");
  }

  function totalCart(products) {
    const cartTotal = products.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.price;
    }, 0);

    return cartTotal;
  }
  const total = totalCart(cartProducts);

  function removeAllProducts() {
    setCartProducts([]);
    toast.warning("Você removeu todos os produtos do carrinho");
  }

  return (
    <div className="App">
      {loading ? (
        <p className="loadingMsg">Carregando...</p>
      ) : (
        <>
          <Header setSearch={setSearch} />

          <div className="container">
            <ProductsList
              addToCart={addToCart}
              searchProducts={searchProducts}
            />
            <Cart
              addToCart={addToCart}
              removeToCart={removeToCart}
              products={products}
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
              total={total}
              removeAllProducts={removeAllProducts}
            />
          </div>
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
