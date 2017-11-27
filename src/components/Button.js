import React from 'react'

function Button(props) {
    let className = 'btn'

    return (
        <button className={ className }>
            { props.title }
        </button>
    )
}

export default Button
// export.modules = Button