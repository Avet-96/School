import React from 'react'

const Images = (props) => {
    console.log(props)
    return (
        <div>
            {props.value}
            {props.value.length !== 0 ?
                props.value.map((url, i) => <img key={i}
                                                 src={url} alt="images"/>)
                : <p>фото не найдено</p>}
        </div>
    )
}
export default Images
