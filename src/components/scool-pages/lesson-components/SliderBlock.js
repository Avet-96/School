import React, {useState} from 'react'
import Carousel from 'nuka-carousel';
import ButtonsGroup from "../../helpers/ButtonsGroup";
import CloneType from "../../helpers/CloneType";


const SliderBlock = (props) => {

    let [imageList, setImageList] = useState([])

    const imageUrl = (file) => {
        let input = file.target;
        let reader = new FileReader();
        reader.onload = function () {
            let newArr = JSON.parse(localStorage.getItem('lesson'))
            let dataURL = reader.result;
            setImageList(prev => [...prev, dataURL])
            newArr[0].images = imageList
            localStorage.setItem('lesson', JSON.stringify(newArr))
        };
        reader.readAsDataURL(input.files[0]);
        file.target.value = '';
    };
    const deleteImage = (index) => {
        if (index > imageList.length) return alert('not this images')
        let newArr = JSON.parse(localStorage.getItem('lesson'))
        imageList.splice(index, 1);
        setImageList([...imageList])
        newArr[0].images = imageList
        localStorage.setItem('lesson', JSON.stringify(newArr))
    }

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
                <input type="number"
                       placeholder='delete images number'
                       onChange={(e) => deleteImage(e.target.value)}
                />
                <input type='file' accept='image/*' onChange={e => imageUrl(e)}/><br/>
                <ButtonsGroup
                    functions={props.props}
                    id={props.id}
                />
            </div>
            <CloneType
                id={props.id}
                cloneData={props.cloneBlock}
            />
            <hr/>
        </div>
    )
}

export default SliderBlock
