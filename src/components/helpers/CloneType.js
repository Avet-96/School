import React, {useState} from 'react'


const CloneType = (props) => {
    return <div className='d-flex justify-content-center'>
        <button className='btn btn-info rounded-circle' onClick={() => props.cloneData(props.id)}><span
            className='text font-weight-bold h4'>+</span>
        </button>
    </div>
}

export default CloneType
