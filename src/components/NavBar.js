import React, {Component} from 'react';
import {Link} from "react-router-dom";
import emptyCache from "./helpers/clearCech";


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    createLesson = () => {
        localStorage.removeItem('lesson')
        emptyCache()
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
                            </ul>
                        </nav>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;

