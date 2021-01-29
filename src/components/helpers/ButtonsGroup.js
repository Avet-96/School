import React from 'react'

const ButtonsGroup = (props) => {
    const {downListData, upListData, deleteListData} = props.functions
    const {editText, id} = props

    return <div>
        <button className="btn btn-dark mr-2" onClick={() => upListData(id)}>Up</button>
        <button className="btn btn-dark mr-2" onClick={() => downListData(id)}>Down</button>
        <button className="btn btn-info mr-2" onClick={editText}>Edit</button>
        <button className="btn btn-danger" onClick={() => deleteListData(id)}>Delete</button>
    </div>
}


export default ButtonsGroup
