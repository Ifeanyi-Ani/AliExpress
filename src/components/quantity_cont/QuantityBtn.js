import React from 'react'
import './quantitybtn.css';

export const QuantityBtn = ({ increase, decrease, count }) => {
    return (
        <div className="btn">
            <button onClick={decrease}>-</button>
            <span>{count}</span>
            <button onClick={increase}>+</button>
        </div>
    )
}
