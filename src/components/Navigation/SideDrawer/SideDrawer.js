import React from 'react'; 
import NavigationItems from '../NavigationItems/NavigationItems'; 
import classes from './SideDrawer.css';
import BackDrop from '../../UI/BackDrop/BackDrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
const sideDrawer=(props)=>
{
    let attachedClasses=[classes.SideDrawer,classes.Close];
    if(props.open)
    {
        attachedClasses=[classes.SideDrawer, classes.Open];
    }
    return(
        <Aux>
        <BackDrop show={props.open} clicked={props.closed}/>
<div className={attachedClasses.join(' ')} onClick={props.closed}>
        <nav>
         <NavigationItems isAuthenticated={props.isAuth}/>

        </nav>
        </div>
        </Aux>
    );
};

export default sideDrawer;