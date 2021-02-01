import React from 'react'

const Images = (props) => {
    return (
        <div className=' container mb-2 mt-2 w-100 col-7
            d-flex align-items-center'>
            <div className='d-flex justify-content-between m-2'>
                {props.value.length !== 0 ?
                    props.value.map((url, i) =>
                        <img
                            key={i}
                            width='100px' height='10px'
                            src={url} alt="im"/>
                    )
                    : <p>фото не найдено</p>}
            </div>
        </div>
    )
}
export default Images
