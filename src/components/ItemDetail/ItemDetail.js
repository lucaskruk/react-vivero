import React from 'react'

export const ItemDetail = (producto) => {
    
  return (
    <div className='card' key={producto.id}>
                            <div className="card-header">
                                <h5>{producto.category}</h5>
                            </div>
                            <div className="card-body">
                                <img className="card-img-top" alt={producto.name} src={producto.foto}/>
                                <h4 className="card-title">{producto.name}</h4>
                                <h6>Valor: ${producto.price}</h6>
                                <p className="card-text">{producto.description}</p>
                                <h6>Disponible: {producto.stock}</h6>
                            </div>
                            <div className="card-footer">
                                <div className="cardBtnDiv">
                                    <label className="cardInputLabel">Cantidad: </label>
                                    <input className="cardInput" typeof="number" />
                                    <button className="btn btn--verde">Agregar al carrito</button> 
                                </div>
                            </div>
    </div>
    
  )
}
