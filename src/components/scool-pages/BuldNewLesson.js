import React, {useState, useEffect} from 'react';
import Title from "./lesson-components/Title";
import Description from "./lesson-components/Description";
import Photo from "./lesson-components/Photo";
import SliderBlock from "./lesson-components/SliderBlock";
import SaveFile from "./lesson-components/SaveFile";
import Video from "./lesson-components/Video";
import {Link} from "react-router-dom";


const BuldNewLesson = () => {
    let componentsArr = [Title, Description, Photo, SliderBlock, Video, SaveFile]
    let lastId = null

    const cloneBlock = (vorElement) => {
        let prevArr = []
        let newData = []
        let a = {...list[vorElement]}
        lastId = Date.now()
        prevArr = list.splice(vorElement, list.length)
        a.id = lastId
        newData = [...list, a, ...prevArr]
        list = newData
        setCompList([...list])
    }

    const downListData = (id) => {
        let refreshData = {}
        for (let i = 0; i < list.length; i++) {
            if (id === list[i].id && i !== list[i].length - 1) {
                refreshData = list[i]
                list[i] = list[i + 1]
                list[i + 1] = refreshData
                setCompList([...list])
                return
            }

        }
    }
    const upListData = (id) => {
        let refreshData = {}
        for (let i = 0; i < list.length; i++) {
            if (id === list[i].id && i !== 0) {
                refreshData = list[i]
                list[i] = list[i - 1]
                list[i - 1] = refreshData
                setCompList([...list])
                return
            }
        }
    }
    const deleteListData = (id) => {
        list.forEach((v, i) => {
            if (v.id === id) {
                list.splice(i, 1)
            }
        })


        setCompList([...list])

    }

    const props = {downListData, upListData, deleteListData, cloneBlock}


    let list = componentsArr.map((v, i) => {
        const TagName = v;
        return {id: i, component: <TagName props={props} id={i}/>}
    });


    const [compList, setCompList] = useState([...list])


    return (
        <div>
            {compList.map(v => <div key={v.id}>
                    {v.component}
                </div>
            )}
            <div className='container d-flex justify-content-center'>
                <Link className='brn btn-danger p-3' to='/'>Save</Link>
            </div>
        </div>

    );

}

export default BuldNewLesson;
