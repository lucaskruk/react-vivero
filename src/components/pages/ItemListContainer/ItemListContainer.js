import { useEffect, useState } from "react";
import { getFetch } from "../../../helpers/getFetch"
import { ItemList } from "../../ItemList/ItemList";
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [ productos, setProductos ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    
    useEffect ( ()=> {
        getFetch('test')
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally( () => setLoading(false));

    }, [])
    
    
    return (
        <>
            <h1>Bienvenidos al vivero Iguazu</h1>
            <ItemList productos={productos} loading={loading}/>
        </>
        
    )
} 

export default ItemListContainer
