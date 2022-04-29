import './App.css';
import useProductsHook from './Pages/CustomHooks/ProductsHook'

function App() {
  const [products,setProducts] = useProductsHook([])
  return (
    <div className="App">
      <h1>{products.length}</h1>
    </div>
  );
}

export default App;
