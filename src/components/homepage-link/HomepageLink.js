import React from 'react'
import { Link } from 'react-router-dom'
import "./homepagelink.css"

export const HomepageLink = () => {
    return (
        <div className='hm-link'>
            <Link to="/">AliExpress</Link>
        </div>
    )
}
export default HomepageLink