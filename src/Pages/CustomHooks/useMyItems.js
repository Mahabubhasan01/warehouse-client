import { useEffect, useState } from "react"

const useMyItems = ()=>{
    const [myItems,setMyItem] = useState({});
    useEffect(()=>{
        const url =`https://cryptic-plains-63507.herokuapp.com/myItems`
        fetch(url).then(res=>res.json()).then(data=>setMyItem(data))
    },[myItems])
    return [myItems]
};
export default useMyItems;