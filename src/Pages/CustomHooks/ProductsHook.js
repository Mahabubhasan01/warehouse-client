const { useState, useEffect } = require("react")

const ProductsHook = () =>{
    const [products,setProducts] = useState([]);
    const [allProduct,setAllProduct] = useState([])
    useEffect(() =>{
        const url ='https://cryptic-plains-63507.herokuapp.com/totalProduct'
        fetch(url).then(res=>res.json()).then(data=>setAllProduct(data));
        
    },[])

    useEffect(() =>{
        const url = 'https://cryptic-plains-63507.herokuapp.com/product';
        fetch(url).then(res=>res.json()).then(data=>setProducts(data));
    },[products]);
    return [products,setProducts,allProduct];
};
    
export default ProductsHook;