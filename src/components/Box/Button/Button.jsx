import React from 'react'

function Button(props) {
    const styles = {
        backgroundColor: props.styles == undefined ? "black" : props.styles.backgroundColor,
        width: '100%',
        height: '100%',
        color: props.styles == undefined ? "white" : props.styles.color
    }
    return (
        <button onClick={props.handleOnClick} style={styles}>{props.children}</button>
    )
}

export default Button
