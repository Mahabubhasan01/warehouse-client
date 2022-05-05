import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MyItems = () => {
    const {id} = useParams()
    const [myItems,setMyItem] = useState({});
    useEffect(()=>{
        const url =`http://localhost:5000/myItems`
        fetch(url).then(res=>res.json()).then(data=>setMyItem(data))
    },[])
    console.log(myItems)


    return (
        <div>
           <h1>my items is here {myItems.length}</h1>
           {/* {
               myItems.map(i=><h1>{i.name}</h1>)
           } */}
        </div>
    );
};

export default MyItems;