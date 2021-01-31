import React, {useState, useRef} from 'react'
import ButtonsGroup from "../../helpers/ButtonsGroup";

const Vidoe = (props) => {

    const [videoSrc, setVideoSrc] = useState('')
    const inputEl = useRef(null);

    const readVideo = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                setVideoSrc(e.target.result)
                inputEl.current.load()
            }
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    return (
        <div className='w-100'>

            <div className='ml-5 mb-5 video_content d-flex flex-column align-items-center'>
                <div className='video_block'>
                    <input type="file"
                           accept="video/*"
                           onChange={e => readVideo(e)}
                    />
                    <hr/>
                    <video controls ref={inputEl}
                           width='100%'
                           height='100%'>
                        <source src={videoSrc}/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <ButtonsGroup
                functions={props.props}
                id={props.id}
            />
            <hr/>
        </div>
    )
}
export default Vidoe

