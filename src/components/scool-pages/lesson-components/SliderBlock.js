import React, {useState} from 'react'
import Carousel from 'nuka-carousel';
import ButtonsGroup from "../../helpers/ButtonsGroup";
import {returnDataArr} from "../helper-functions/helperfunctions";


const SliderBlock = (props) => {

    let [imageList, setImageList] = useState([])

    const imageUrl = (file) => {
        setImageList(prev => {
            return [...prev,    returnDataArr(file, props.id)]
        })
        file.target.value = '';
    };

    return (
        <div className='mt-5 w-100'>
            <div className='slider_block container mb-2 mt-2 w-100 col-7'>
                <Carousel>
                    {imageList.map((v, i) => <img
                        src={v}
                        key={i}
                        width='100%'
                        height='100%'
                        alt='uiou'
                    />)}
                </Carousel>

            </div>
            <div className='d-flex flex-column align-items-center'>
                <input type='file' accept='image/*' onChange={e => imageUrl(e)}/><br/>
                <ButtonsGroup
                    functions={props.props}
                    id={props.id}
                />
            </div>

            <hr/>
        </div>
    )
}

export default SliderBlock
