import React from 'react'
import "./breaksection.css"
const BreakSection = ({ text }) => {
    return (
        <div className='flex-line'><div className="hr"><hr /></div><div className='text'>{text}</div><div className="hr"><hr /></div></div>
    )
}
export default BreakSection;