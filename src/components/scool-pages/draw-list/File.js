import React from 'react'

const File = (props) => {
    console.log(props, 'file')
    return (
        <div>
            {props.value.length !== 0 ?
                props.value.map((file, i) => <p key={i}>{file}</p>)
                : <p>фаил не наиден</p>}

        </div>
    )
}
export default File
