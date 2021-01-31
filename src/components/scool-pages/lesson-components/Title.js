import React, {Component} from 'react';
import ButtonsGroup from "../../helpers/ButtonsGroup";


class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            isReed: false
        }
    }

    handleKeyPress = (e) => {
        const {id} = this.props
        let newArr = JSON.parse(localStorage.getItem('lesson'))
        if (e.key === 'Enter') {
            newArr.forEach(v => {
                if (v.id === id) {
                    v.value = this.state.title
                }
            })
            localStorage.setItem('lesson', JSON.stringify(newArr))
            this.setState({isReed: true})
        }
    }

    editHandler = () => {
        this.setState({isReed: false})
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

                <hr/>
            </div>
        );
    }
}

export default Title;
