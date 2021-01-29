import React, {Component} from 'react';

import im from '../../assets/images/im.jpg'

class Classes extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='ml-3 lesson_block d-flex'
                 onClick={() => this.props.rendBlock(this.props.props.id)}>
                <img src={im} width='100%' height='100%' alt=""/>
            </div>
        );
    }
}

export default Classes;
