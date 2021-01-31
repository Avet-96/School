import React from 'react'
import Carousel from "nuka-carousel";

const Slider = (props) => {
    return (
        <div className='slider_block container mb-2 mt-2 w-100 col-7'>
            <Carousel>
                {props.value.length !== 0 ?
                    props.value.map((url, i) =>
                        <img src={url}
                             key={i}
                             width='100%'
                             height='100%'
                             alt="images"/>
                    ) : <p>фото не наидено</p>}
            </Carousel>

        </div>
    )
}
export default Slider
