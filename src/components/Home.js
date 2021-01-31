import React, {useState} from 'react';
import NavBar from "./NavBar";
import Classes from "./scool-pages/Classes";
import Wrapper from "./wrapper/Wrapper";
import Lesson from "./lesson/Lesson";

const Home = () => {
    let data = JSON.parse(localStorage.getItem('fullData'))

    let [classList, setClassList] = useState(data)
    let [renderData, setRenderData] = useState([])
    let [dataList, setDataList] = useState([])

    const addNewLesson = () => {
        let newData = {
            id: Date.now(),
        }
        setClassList(prev => [newData, ...prev])
    }
    const renderBlock = (index, data) => {
        setDataList(data)
        classList.filter((v, i) => {
            if (i === index) {
                setRenderData([v])
            }
        })
    }

    return (
        <div className='body'>
            <NavBar
                addArray={addNewLesson}
            />
            <div className='container d-flex  flex-column  mt-4'>
                <div className='container d-flex'>
                    {classList !== null ? classList.map((v, i) =>
                        <div key={i}>
                            <Classes
                                props={v}
                                index={i}
                                renderData={renderData}
                                rendBlock={renderBlock}
                            />
                        </div>) : ''}
                </div>

                <Wrapper>
                    <Lesson
                        componentList={dataList}
                    />
                </Wrapper>
            </div>

        </div>
    );

}

export default Home;
