import React from 'react'
import Carousel from "nuka-carousel";

const Slider = (props) => {
    return (
        <div>
            {props.value.length !== 0 ?
                props.value.map(url => <Carousel>
                        <img src={url} alt="images"/>
                    </Carousel>
                ) : <p>фото не наидено</p>}
        </div>
    )
}
export default Slider
