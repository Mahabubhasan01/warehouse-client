const { useState, useEffect } = require("react")

const ProductsHook = () =>{
    const [products,setProducts] = useState([]);
    useEffect(() =>{
        const url = 'http://localhost:5000/products';
        fetch(url).then(res=>res.json()).then(data=>setProducts(data));
    },[]);
    return [products,setProducts];
};
export default ProductsHook;