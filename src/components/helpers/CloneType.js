import React from 'react'


const CloneType = (props) => {
    return <div className='d-flex justify-content-center'>
        <button className='btn btn-info rounded-circle'><span
            className='text font-weight-bold h4' onClick={() => props.addCategories(true)}>+</span>
        </button>
    </div>
}

export default CloneType
