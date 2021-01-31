import React from 'react'

const ButtonsGroup = (props) => {
    const {downListData, upListData, deleteListData} = props.functions
    const {editText, id} = props

    let buttonGroup = [
        {id, click: upListData, title: 'Верх', style: 'btn-dark mr-2'},
        {id, click: downListData, title: 'Вниз', style: 'btn-dark mr-2'},
        {id, click: deleteListData, title: 'Удалить', style: 'btn-danger mr-2'}
    ]

    return <div>
        {buttonGroup.map(v => (
            <button
                key={v.title}
                className={`btn ${v.style}`}
                onClick={() => v.click(v.id)}
            >{v.title}</button>
        ))}
        {editText !== undefined ? <button className="btn btn-info" onClick={editText}>Edit</button> : ''}
    </div>
}


export default ButtonsGroup
