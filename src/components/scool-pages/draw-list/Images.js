import React from 'react'

const Images = (props) => {
    return (
        <div className=' container mb-2 mt-2 w-100 col-7
            d-flex align-items-center justify-content-start'>
            <div className='images_block m-2'>
                {props.value}
                {props.value.length !== 0 ?
                    props.value.map((url, i) =>
                        <img
                            key={i}
                            width='100%' height='100%'
                            src={url} alt="images"/>
                    )
                    : <p>фото не найдено</p>}
            </div>
        </div>
    )
}
export default Images
