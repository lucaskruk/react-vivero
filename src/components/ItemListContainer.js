import { useEffect, useState } from "react";
import { getFetch } from "../helpers/getFetch"


const ItemListContainer = () => {
    const [ productos, setProductos ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    
    useEffect ( ()=> {
        getFetch('test')
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally( () => setLoading(false));

    }, [])
    
    console.log(productos);
    
    return (
        <>
        <h1>Bienvenidos al vivero Iguazu</h1>
        { loading ? <h2>Cargando...</h2> :
        productos.map(producto => <li key={producto.id}>{producto.name}</li>)}
        </>
    )
} 

export default ItemListContainer