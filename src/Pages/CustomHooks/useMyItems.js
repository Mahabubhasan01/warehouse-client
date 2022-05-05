import { useEffect, useState } from "react"

const useMyItems = ()=>{
    const [myItems,setMyItem] = useState({});
    useEffect(()=>{
        const url =`http://localhost:5000/myItems`
        fetch(url).then(res=>res.json()).then(data=>setMyItem(data))
    },[myItems])
    return [myItems]
};
export default useMyItems;