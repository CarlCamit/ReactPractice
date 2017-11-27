import React from 'react'

function Button({ children, primary = false, magic = false }) {
    let className = 'btn'

    if (primary) {
        className += ' btn-primary'
    }

    if (magic) {
        className += ' btn-rainbow'
    }

    return (
        <button className={ className }>
            { children }
        </button>
    )
}

export default Button
// export.modules = Button