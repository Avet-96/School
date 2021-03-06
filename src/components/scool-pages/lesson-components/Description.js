import React, {Component} from 'react';
import ButtonsGroup from "../../helpers/ButtonsGroup";
import {handleKeyPress} from "../helper-functions/helperfunctions";

class Description extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            isReed: false
        }
    }


    editHandler = () => {
        this.setState({isReed: false})
    }
    keyPress = (e) => {
        handleKeyPress(e, this.state.description, this.props.id)
        if (e.key === 'Enter') {
            return this.setState({isReed: true})
        }
    }

    render() {
        return (
            <div className='w-100'>
                <div className='container mb-2 mt-2 w-100 d-flex justify-content-center col-7'>
                    <textarea
                        className='title_textArea'
                        name='description'
                        value={this.state.description}
                        onChange={e => this.setState({description: e.target.value})}
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

export default Description;
