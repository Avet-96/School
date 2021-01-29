import React, {Component} from 'react';
import ButtonsGroup from "../../helpers/ButtonsGroup";
import CloneType from "../../helpers/CloneType";

class Description extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            isReed: false
        }
    }


    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.setState({isReed: true})
            let newArr = JSON.parse(localStorage.getItem('lesson'))
            newArr[0].description = [this.state.description];
            localStorage.setItem('lesson', JSON.stringify(newArr))
        }
    }
    editHandler = () => {
        this.setState({isReed: false})
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
                        onKeyDown={e => this.handleKeyPress(e)}
                        readOnly={this.state.isReed}
                        placeholder='Наш Загаловок'
                    />
                </div>
                <ButtonsGroup
                    editText={this.editHandler}
                    functions={this.props.props}
                    id={this.props.id}
                />
                <CloneType
                    id={this.props.id}
                    cloneData={this.props.props.cloneBlock}
                />
                <hr/>
            </div>
        );
    }
}

export default Description;
