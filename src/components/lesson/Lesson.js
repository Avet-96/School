import React from 'react';


const Lesson = (props) => {
    return (
        <div className='w-100 bg-white container'>
            {props.componentList.length !== 0 ? props.componentList.map(component =>
                <div key={component.id}>
                    {component.component}
                </div>
            ) : ''}
        </div>
    );


}

export default Lesson;
