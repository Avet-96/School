import React, {useState} from 'react';
import ButtonsGroup from "../../helpers/ButtonsGroup";

let arr = []

const Photo = (props) => {
    let [imagesList, setImagesList] = useState([])

    const imageUrl =  (file) => {
        let newArr = JSON.parse(localStorage.getItem('lesson'))
        let dataURL = URL.createObjectURL(file.target.files[0])

        newArr.forEach(v => {
            if (v.id === props.id) {
                arr = [dataURL, ...arr]
                v.value = arr
            }
        })
        localStorage.setItem('lesson', JSON.stringify(newArr))
        setImagesList(prev => {
            return [...prev, dataURL]
        })
        file.target.value = '';

    };

    const deleteImage = (index) => {
        let newArr = JSON.parse(localStorage.getItem('lesson'))

        arr.splice(index, 1)
        imagesList.splice(index, 1);
        newArr.forEach(v => {
            if (v.id === props.id) {
                v.value = arr
            }
        })

        localStorage.setItem('lesson', JSON.stringify(newArr))
        setImagesList([...imagesList])

    }

    return (
        <div className='w-100'>
            <div className=' container mb-2 mt-2 w-100 col-7
            d-flex align-items-center justify-content-start'>
                {imagesList.map((v, i) =>
                    <div key={i} className='images_block m-2'>
                        <button className='button_delete' onClick={() => deleteImage(i)}>X</button>
                        <img src={v} width='100%' height='100%'/>
                    </div>)}
            </div>
            <input type='file' accept='image/*' onChange={e => imageUrl(e)}/><br/>
            <ButtonsGroup
                functions={props.props}
                id={props.id}
            />


            <hr/>
        </div>
    );

}

export default Photo;
