import React from 'react'

function Emoji({ sad = false, cat = false }) {
    let text = ''

    if (cat) {
        text = '😸'
    }
    else {
        text = '😊'
    }

    return (
        <span>
            
        </span>
    )
}

export default Emoji
// export.modules = Emoji