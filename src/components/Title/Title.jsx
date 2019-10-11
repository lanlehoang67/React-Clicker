import React from 'react'
const styles = {
    main: {
        backgroundColor: '#212529',
        color: 'white',
        textAlign: 'center',
        height: '100px',
    },
    icon: {
        fontSize: '4em',
        display: 'inline-block',
        boxSizing: 'border-box',
        verticalAlign: 'middle',
        lineHeight: '1.5em'
    },
    title: {
        display: 'inline-block',
        fontSize: '2.5em',
        margin: '8px 0 8px 8px',
        verticalAlign: 'middle',
        lineHeight: '1.5em'
    }

}
function Title() {
    return (
        <div style={styles.main}>
            <i style={styles.icon} className="fa fa-hand-pointer-o fa-4x text-white"></i>
            <p style={styles.title}>React Clicker</p>
        </div>
    )
}

export default Title
