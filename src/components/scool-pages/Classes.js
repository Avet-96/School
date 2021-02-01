import React from 'react';

import im from '../../assets/images/im.jpg'

import Title from '../scool-pages/draw-list/Title'
import Description from '../scool-pages/draw-list/Description'
import Images from '../scool-pages/draw-list/Images'
import Slider from '../scool-pages/draw-list/Slider'
import Video from '../scool-pages/draw-list/Video'
import File from '../scool-pages/draw-list/File'

const components = {
    'title': Title,
    'description': Description,
    'photo': Images,
    'slider': Slider,
    'video': Video,
    'file': File
}

const Classes = (props) => {
    const createCategories = () => {
        const data = []
        if (props.props !== undefined) {
            props.props.forEach((prop, i) => {
                const ComponentName = components[prop.name];
                const component = {id: prop.id, component: <ComponentName value={prop.value} id={prop.id}/>};
                data.push(component);
            })
        }

        props.rendBlock(props.index, data)
    }

    return (
        <div className='ml-3 lesson_block d-flex'
             onClick={createCategories}>
            <img src={im} width='100%' height='100%' alt=""/>
        </div>
    );

}

export default Classes;
