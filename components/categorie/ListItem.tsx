import React, { ReactChild } from "react";

function ListItem({ label }: { label: string | ReactChild }) {
    return (
        <li className='sidebar-item'>
            <input type='checkbox' />
            <label>{label}</label>
        </li>
    );
}

export default ListItem;
