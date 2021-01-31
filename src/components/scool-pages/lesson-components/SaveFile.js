import React, {useState} from 'react'
import ButtonsGroup from "../../helpers/ButtonsGroup";
import {returnDataArr} from "../helper-functions/helperfunctions";

let data = []
const SaveFile = (props) => {

    const [file, setFile] = useState([])
    const saveFile = (e) => {
        let newArr = returnDataArr()

        newArr.forEach(v => {
            if (v.id === props.id) {
                data = [e.target.value, ...data]
                v.value = data
            }
        })
        localStorage.setItem('lesson', JSON.stringify(newArr))
        setFile(prev => [e.target.value, ...prev])
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

            <hr/>
        </div>
    )
}

export default SaveFile
