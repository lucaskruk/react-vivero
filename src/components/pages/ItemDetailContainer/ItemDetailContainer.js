import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getDetail } from '../../../helpers/getDetail';
import { ItemDetail } from '../../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
    const [ detalle, setDetalle ] = useState([]);
    const [ loadDetalle, setLoadDetalle ] = useState(true);
    const id = useParams();
    
    useEffect ( ()=> {
        getDetail(id)
        .then(resp => setDetalle(resp))
        .catch(err => console.log(err))
        .finally( () => setLoadDetalle(false));

    }, [])
    
  return (<>
    {loadDetalle ? <h2>Cargando...</h2> : <ItemDetail {...detalle}/>}
    </>
  )
}
