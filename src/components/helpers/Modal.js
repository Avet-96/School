import React from 'react'

const Modal = (props) => {
    let buttons = [
        {id: 1, title: 'Загаловок'},
        {id: 2, title: 'Описание'},
        {id: 3, title: 'Фото'},
        {id: 4, title: 'Слайдер'},
        {id: 5, title: 'Видео'},
        {id: 6, title: 'Фаил'}
    ]


    return (
        <div className="d-flex w-100 justify-content-center flex-column container">
            <div className='d-flex justify-content-end mb-2'>
                <button className='btn btn-danger'
                        onClick={()=>props.closedModal(false)}
                >X
                </button>
            </div>
            <div className="modal-content">
                <h3 className='text-center'>Дабавтье категории</h3>
            </div>
            <div className="d-flex flex-wrap justify-content-between p-3 mt-4 mb-4">
                {buttons.map(v =>
                    <button
                        className="btn btn-info ml-1 mt-1"
                        key={v.id}
                        onClick={() => props.addCategories(v.id)}
                    >{v.title}</button>
                )}
            </div>

        </div>
    )
}
export default Modal
