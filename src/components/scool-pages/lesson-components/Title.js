import React, {Component} from 'react';
import ButtonsGroup from "../../helpers/ButtonsGroup";
import CloneType from "../../helpers/CloneType";


class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            isReed: false
        }
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.setState({isReed: true})
            let newArr = JSON.parse(localStorage.getItem('lesson'))
            newArr[0].title = [this.state.title];
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
                    <input type="text"
                           className='title_input'
                           name='title'
                           value={this.state.title}
                           onChange={e => this.setState({title: e.target.value})}
                           onKeyDown={e => this.handleKeyPress(e)}
                           readOnly={this.state.isReed}
                           placeholder='Наш Загаловок'
                    />
                </div>
                <ButtonsGroup editText={this.editHandler}
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

export default Title;
