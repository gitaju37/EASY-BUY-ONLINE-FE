import { useContext } from "react"

import '../App.css'
import MyContext from "./Context/MyContext"


const Products = () => {
    const { products } = useContext( MyContext)
   
    return (
      <>
            <div className="product-container ">
                {
                    products.map( ( product, index ) => {
                        return (
                            <div className="card" key={index} style={{width:"18rem"}}>
                                <img src={product.image} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                    <h4 className="card-title">{product.name}</h4>
                                    <h5 className="card-text">{product.price }</h5>
                                </div>
                                <div className="p-2 d-flex justify-content-center">
                                    <button className="btn btn-success">Add to Cart</button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
    </>
  )
}

export default Products
