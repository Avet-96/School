import React, {useState} from 'react';
import ButtonsGroup from "../../helpers/ButtonsGroup";
import CloneType from "../../helpers/CloneType";


const Photo = (props) => {

    let [imagesList, setImagesList] = useState([])

    const imageUrl = async (file) => {
        let input = file.target;
        let reader = new FileReader();
        reader.onload = function () {
            let dataURL = reader.result;
            setImagesList(prev => {
                let newArr = JSON.parse(localStorage.getItem('lesson'))
                newArr[0].images = [...prev]
                localStorage.setItem('lesson', JSON.stringify(newArr))
                return [...prev, dataURL]
            })

        };
        reader.readAsDataURL(input.files[0]);
        file.target.value = '';

    };

    const deleteImage = (index) => {
        imagesList.splice(index, 1);
        setImagesList([...imagesList])
        let newArr = JSON.parse(localStorage.getItem('lesson'))
        newArr[0].images = imagesList;
        localStorage.setItem('lesson', JSON.stringify(newArr))
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

            <CloneType
                id={props.id}
                cloneData={props.props.cloneBlock}
            />
            <hr/>
        </div>
    );

}

export default Photo;
