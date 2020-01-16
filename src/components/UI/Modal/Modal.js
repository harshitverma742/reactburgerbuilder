import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import BackDrop from '../BackDrop/BackDrop';


const modal=props=>{

    // shouldComponentUpdate(nextProps, nextState)
    // {
        
    //  return nextProps.show!==this.props.show ||nextProps.children!==this.props.children;   
    // }
    
    
 
        return(
        <Aux>
            <BackDrop show={props.show} clicked={props.modalCloses}/>
        <div className={classes.Modal}
        style={{
            transform:props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity:props.show?'1':'0'
        }}>
    
            {props.children }
        </div>
        </Aux>
        );
    
}

export default React.memo(modal,(prevProps,nextProps)=>
nextProps.show===prevProps.show &&
nextProps.children===prevProps.children
);