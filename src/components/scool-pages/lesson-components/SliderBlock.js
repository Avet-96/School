import React, {useState} from 'react'
import Carousel from 'nuka-carousel';
import ButtonsGroup from "../../helpers/ButtonsGroup";

let arr = []

const SliderBlock = (props) => {

    let [imageList, setImageList] = useState([])

    const imageUrl = (file) => {
        let newArr = JSON.parse(localStorage.getItem('lesson'))
        let dataURL = URL.createObjectURL(file.target.files[0])
        newArr.forEach(v => {
            if (v.id === props.id) {
                arr = [dataURL, ...arr]
                v.value = arr
            }
        })
        localStorage.setItem('lesson', JSON.stringify(newArr))
        setImageList(prev => {
            return [...prev, dataURL]
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
