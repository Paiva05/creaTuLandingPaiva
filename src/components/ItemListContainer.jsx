import {useState, useEffect, use} from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList.jsx";

function ItemListContainer (){
  const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
      const urlHome = 'https://dummyjson.com/products';
      const urlCategory = `https://dummyjson.com/products/category/${id}`;

      fetch(id ? urlCategory : urlHome)
        .then(res => res.json())  
        .then(data => setItems(data.products))
        .catch(error => console.error('Error al cargar los productos', error));
    }, [id]);


    return (
      <ItemList items={items} />
    )
  };

  export default ItemListContainer;