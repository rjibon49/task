import { useEffect, useState } from "react"

const UseDelivery = () => {
    const [delivery, setDelivery] = useState([]);

    useEffect(() => {
        fetch('./deliveryList.json')
        .then ( res => res.json())
        .then(data => setDelivery(data));
    },[])

    return[delivery] ;
    
}

export default UseDelivery