import React from 'react'

function Product(props) {
    return (
        <div>
            <p>Name: {props.product.name}</p>
            <p>Price: {props.product.price}</p>
            <p>Descroption: {props.product.description}</p>
        </div>
    )
}

export default Product