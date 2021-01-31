import React, {Component} from 'react';
import {Link} from "react-router-dom";


import Title from "./lesson-components/Title";
import Description from "./lesson-components/Description";
import Photo from "./lesson-components/Photo";
import SliderBlock from "./lesson-components/SliderBlock";
import SaveFile from "./lesson-components/SaveFile";
import Video from "./lesson-components/Video";
import CloneType from "../helpers/CloneType";
import Modal from "../helpers/Modal";


// components list
let componentsArr = [
    {component: Title, name: 'title'},
    {component: Description, name: 'description'},
    {component: Photo, name: 'photo'},
    {component: SliderBlock, name: 'slider'},
    {component: Video, name: 'video'},
    {component: SaveFile, name: 'file'},
]
let data = []
let dbData = []
let localData = JSON.parse(localStorage.getItem('lesson'))



class BuldNewLesson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            compList: [],
            isOpen: false,
        }
    }

    render() {
        const {isOpen, compList} = this.state
        return (<div>
            <div className='container'>
                <CloneType
                    addCategories={this.openModal}
                />
                {isOpen ? <Modal
                    closedModal={this.openModal}
                    addCategories={this.createCategories}
                /> : ''}

            </div>
            {compList.length !== 0 ? compList.map(v => <div key={v.id}>
                {v.component}
            </div>) : ''}
            <div className='container d-flex justify-content-center'>
                <button
                    className='brn btn-danger p-3'
                    onClick={this.saveFoolData}
                >{(localData !== null) && (localData.length !== 0) ? <Link to='/'>
                    Save
                </Link> : <span>Save</span>}
                </button>
            </div>
        </div>);
    }

    //data displaced functions
    downListData = (id) => {
        const {compList} = this.state
        let refreshData = {}
        let dbRefreshData = {}

        dbData = JSON.parse(localStorage.getItem('lesson'))

        for (let i = 0; i < compList.length; i++) {
            if (id === compList[i].id && i !== compList.length - 1) {
                // local dow
                refreshData = compList[i]
                compList[i] = compList[i + 1]
                compList[i + 1] = refreshData

                //db down
                dbRefreshData = dbData[i]
                dbData[i] = dbData[i + 1]
                dbData[i + 1] = dbRefreshData

                this.setState({compList: [...compList]})
                localStorage.setItem('lesson', JSON.stringify(dbData))

                return
            }

        }

    };
    upListData = (id) => {
        const {compList} = this.state

        let refreshData = {}
        let dbRefreshData = {}

        dbData = JSON.parse(localStorage.getItem('lesson'))

        for (let i = 0; i < compList.length; i++) {
            if (id === compList[i].id && i !== 0) {
                //local up
                refreshData = compList[i]
                compList[i] = compList[i - 1]
                compList[i - 1] = refreshData

                //db up
                dbRefreshData = dbData[i]
                dbData[i] = dbData[i - 1]
                dbData[i - 1] = dbRefreshData

                this.setState({compList: [...compList]})
                localStorage.setItem('lesson', JSON.stringify(dbData))
                return
            }

        }
    };
    deleteListData = (id) => {
        const {compList} = this.state
        dbData = JSON.parse(localStorage.getItem('lesson'))
        compList.forEach((v, i) => {
            if (v.id === id) {
                compList.splice(i, 1)
                dbData.splice(i, 1)
            }
        })
        this.setState({compList: [...compList]})
        localStorage.setItem('lesson', JSON.stringify(dbData))

    };


    // return props functions
    rendFunctions = () => ({
        downListData: this.downListData,
        upListData: this.upListData,
        deleteListData: this.deleteListData
    });
    openModal = (ind) => {
        this.setState({isOpen: ind})
    };

    //creat new component
    createCategories = (id) => {
        let TagName = componentsArr[id - 1].component;
        let name = componentsArr[id - 1].name
        let iDa = Date.now()

        localData = this.state.compList
        localData = [{id: iDa, name, component: <TagName props={this.rendFunctions()} id={iDa}/>}, ...localData];

        this.setState({compList: localData})
        this.saveData(name, iDa)

    };

    //save data to db
    saveData = (name, id) => {
        let obj = {}
        obj = {id, name: name, value: ''}
        dbData = [obj, ...dbData]
        localStorage.setItem('lesson', JSON.stringify(dbData))


    }
    saveFoolData = () => {
        if (localData !== null) {
            let newData = JSON.parse(localStorage.getItem('lesson')) ?? []
            let fullData = JSON.parse(localStorage.getItem('fullData')) ?? []
            data = [newData, ...fullData]
            localStorage.setItem('fullData', JSON.stringify(data))
        }
    }

}

export default BuldNewLesson;

