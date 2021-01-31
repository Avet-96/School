import React, {useState} from 'react';
import ButtonsGroup from "../../helpers/ButtonsGroup";
import {deletePhoto, returnDataArr} from "../helper-functions/helperfunctions";


const Photo = (props) => {
    let [imagesList, setImagesList] = useState([])

    const imageUrl = (file) => {
        let dataUrl = returnDataArr(file, props.id)
        setImagesList(prev => [...prev, dataUrl])
        file.target.value = '';
    };

    const deleteImage = (index) => {
        deletePhoto(index, imagesList, props.id)
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
