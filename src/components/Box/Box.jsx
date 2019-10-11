import React from 'react'
import Button from './Button/Button'
const styles = {
    main: {
        margin: '48px 0 0 0',
        textAlign: 'center',
        alignItems: 'center',
        display: 'block'
    },
    box: {
        display: 'inline-block',
        boxSizing: 'border-box',
        border: '1px solid',
        width: '300px',
        height: '300px'
    },
    number: {
        display: 'block',
        margin: '40px auto',
        fontSize: '6rem',
        fontWeight: '300',
        lineHeight: '1.2',
        color: '#6c757d',
    },
    plusBtn: {
        backgroundColor: '#28a745',
        border: '#ffc107',
        color: 'white',
        width: "100%"
    },
    reloadBtn: {
        backgroundColor: '#ffc107',
        border: '#ffc107',
        color: 'black',
        width: '100%',
    },
    minusBtn: {
        backgroundColor: '#dc3545',
        border: '#dc3545',
        color: 'white',
        width: '100%',
    },
    btnSection: {
        display: 'flex',
        height: '104px',
        boxSizing: 'border-box',
        width: '100%',
    },
   
}
class Box extends React.PureComponent {
    constructor(props){
        super(...arguments);
        this.state = {
            number: 0       
         }
    }
    render(){
        return (
            <div style={styles.main}>
                <div className="box" style={styles.box}><div className="number" style={styles.number}>{this.state.number}</div>
                <div style={styles.btnSection}>
                <button onClick={()=>this.setState({number: parseInt(this.state.number) + 1 })} style={styles.plusBtn}><i className="fa fa-plus fa-2x"></i></button>
                <button onClick={()=>  this.setState({number:  0})} style={styles.reloadBtn}><i className="fa fa-refresh fa-2x"></i></button>
                <button onClick={()=> this.setState({number: parseInt(this.state.number) - 1})} style={styles.minusBtn}><i className="fa fa-minus fa-2x"></i></button>
                </div>
                </div>  
            </div>
        )
    }
    
}

export default Box
