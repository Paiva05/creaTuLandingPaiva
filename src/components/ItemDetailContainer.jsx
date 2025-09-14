import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const [Item, setItem] = useState();
    const {id} = useParams();
    const {categoy} = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res=>res.json())
        .then(json=> setItem(json))
    }, [id])

    return (
        <ItemDetail Item={Item} />
    )
}

export default ItemDetailContainer;