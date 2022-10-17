import React from 'react'
import { Item } from '../Item/Item'
import './ItemList.css'

export const ItemList = (props) => {
  return (
    <section className="cardsList">
    { props.loading ? <h2>Cargando...</h2> :
        props.productos.map(producto => 
               <Item {...producto} key={producto.id}/>
            
        )
    }
    </section>
  )
}
