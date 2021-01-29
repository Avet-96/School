import React, {Component} from 'react';
import {Link} from "react-router-dom";

let data = []

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        if (localStorage.getItem('lesson') === null) {
            localStorage.setItem('lesson', JSON.stringify(data))

        }
    }

    createLesson = () => {
        let lesson = {
            id: Date.now(),
            title: [],
            description: [],
            photo: [],
            slider: [],
            images: [],
            video: [],
            file: []
        }
        let newArr = JSON.parse(localStorage.getItem('lesson'))
        data = [lesson, ...newArr]
        localStorage.setItem('lesson', JSON.stringify(data))
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light  p-4 row">
                <div className="container-fluid d-flex justify-content-between ">
                    <span className="navbar-brand col-4 text-black-50">Уроки</span>
                    <div className='col-4'>
                        <nav>
                            <ul className='d-flex justify-content-around'
                                onClick={this.createLesson}
                            >
                                <Link className='btn btn-info navbar_links p-2'
                                      to='/new-lesson'>Дабавить урок
                                </Link>
                                <li className='btn btn-info navbar_links p-2'>Смотреть урок</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;

