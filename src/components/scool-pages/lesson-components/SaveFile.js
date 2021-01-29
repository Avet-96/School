import React, {useState} from 'react'
import ButtonsGroup from "../../helpers/ButtonsGroup";
import CloneType from "../../helpers/CloneType";


const SaveFile = (props) => {

    const [file, setFile] = useState([])
    const saveFile = (e) => {

        setFile(prev => {
            let newArr = JSON.parse(localStorage.getItem('lesson'))
            newArr[0].file = [e.target.value, ...prev];
            localStorage.setItem('lesson', JSON.stringify(newArr))
            return [e.target.value, ...prev]
        })

    }

    return (
        <div className='w-100 mt-5 d-flex p-3'>
            <div className='d-flex flex-column w-50'>
                <ButtonsGroup
                    functions={props.props}
                    id={props.id}
                />
                <input type="file" onChange={e => saveFile(e)} name="" id=""/>
            </div>
            <div>
                {file.map((v, i) => <p key={i}>{v}</p>)}
            </div>
            <CloneType
                id={props.id}
                cloneData={props.props.cloneBlock}
            />
            <hr/>
        </div>
    )
}

export default SaveFile
