import React from 'react';
import './sidebarrow.css';
const SidebarRow=(props)=> {
    console.log(props);
    return (
        <div className={`sidebar_row ${props.selected && "selected"}`} >
        <props.Icon  className="sidebarrow_icon" />
        <h2 className="sidebarrow_title">{props.title}</h2>
        
            
        </div>
    );
}

export default SidebarRow;