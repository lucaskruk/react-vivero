import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

export const Item = (producto) => {
  return (
    <div className="card productosCard">
                            
                            <div className="card-header">
                                <h5>{producto.category}</h5>
                            </div>
                            <div className="card-body">
                                <img className="card-img-top" alt={producto.name} src={producto.foto}/>
                                <h4 className="card-title">{producto.name}</h4>
                                <h6>Valor: ${producto.price}</h6>
                            </div>
                            <div className="card-footer">
                                <Link to ={`/productos/detalle/${producto.id}`}>
                                    <button className="btn btn-outline-primary">
                                        Detalle del producto
                                    </button>
                                </Link>
                            </div>
                        </div>
  )
}
