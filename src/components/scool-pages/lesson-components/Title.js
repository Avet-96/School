import React, {Component} from 'react';
import ButtonsGroup from "../../helpers/ButtonsGroup";
import {handleKeyPress} from "../helper-functions/helperfunctions";


class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            isReed: false
        }
    }

    editHandler = () => {
        this.setState({isReed: false})
    }
    keyPress = (e) => {
        handleKeyPress(e, this.state.title, this.props.id)
        if (e.key === 'Enter') {
            return this.setState({isReed: true})
        }
    }

    render() {
        return (
            <div className='w-100'>
                <div className='container mb-2 mt-2 w-100 d-flex justify-content-center col-7'>
                    <input
                        type="text"
                        className='title_input'
                        name='title'
                        value={this.state.title}
                        onChange={e => this.setState({title: e.target.value})}
                        onKeyDown={e => this.keyPress(e)}
                        readOnly={this.state.isReed}
                        placeholder='Наш Загаловок'
                    />
                </div>
                <ButtonsGroup
                    editText={this.editHandler}
                    functions={this.props.props}
                    id={this.props.id}
                />

                <hr/>
            </div>
        );
    }
}

export default Title;
