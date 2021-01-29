import React, {useState, useEffect} from 'react';
import NavBar from "./NavBar";
import Classes from "./scool-pages/Classes";
import Wrapper from "./wrapper/Wrapper";
import Lesson from "./lesson/Lesson";

const Home = () => {
    let data = JSON.parse(localStorage.getItem('lesson'))

    let [classList, setClassList] = useState(data)
    let [renderData, setRenderData] = useState([])
    const addNewLesson = () => {
        let newData = {
            id: Date.now(),
        }
        setClassList(prev => [newData, ...prev])
    }
    const renderBlock = (id) => {
        classList.filter(v => {
            if (v.id === id) {
                setRenderData([v])
                return v
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
                  {classList !== null ? classList.map(v => <Classes
                      key={v.id}
                      props={v}
                      rendBlock={renderBlock}
                  />) : ''}
              </div>

                <Wrapper>
                    <Lesson props={renderData}/>
                </Wrapper>
            </div>

        </div>
    );

}

export default Home;
