    import React from 'react';
    import classes from './ToolBar.css';
    import NavigationItems from '../NavigationItems/NavigationItems';
    import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
    

    

    const toolbar=(props)=>(
        <header className={classes.ToolBar}>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <div>LOGO</div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems isAuthenticated={props.isAuth} />
            </nav>
        </header>


    );

    export default toolbar;