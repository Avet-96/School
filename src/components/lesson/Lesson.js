import React, {Component} from 'react';
import Carousel from "nuka-carousel";


class Lesson extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='w-100 bg-white container'>
                {this.props.props.length ? this.props.props.map((v, i) => (
                        <div className='d-flex flex-column' key={i}>
                            <div className='text-center'>
                                <h2>{v.title}</h2>
                                <hr/>
                            </div>
                            <div className='text-center'>
                                <h3>{v.description}</h3>
                                <hr/>
                            </div>
                            <div className='slider_block container mb-2 mt-2 w-100  text-center'>
                                {v.images.length !== undefined ? <div className='images_block m-2'>
                                    {v.images.map((k, t) =>
                                        <img key={t} src={k} width='100%' height='100%'/>
                                    )}
                                </div> : (<p>нет фотографии</p>)}
                                <hr/>
                                {v.slider.length !== 0 ? <Carousel>
                                    {v.slider.map((е, а) =>
                                        <img
                                            src={е}
                                            key={а}
                                            width='100%'
                                            height='100%'
                                        />)}
                                </Carousel> : (<p>нет фотографии</p>)}
                                <hr/>
                                {v.video.length !== 0 ?
                                    <div className='video_block'>
                                        <video controls
                                               width='100%'
                                               height='100%'>
                                            <source src={v.video[0]}/>
                                            Your browser does not support the video tag.
                                        </video>
                                    </div> : <p>видео не дабавлено</p>}
                                <hr/>
                            </div>
                            <div>
                                {v.file.length !== 0 ? <div>
                                    {v.file.map((z, b) => <p key={b}>{z}</p>)}
                                </div> : <p>Фаил не добавлен</p>}
                            </div>
                        </div>
                    )
                ) : ''}
            </div>
        );
    }

}

export default Lesson;
