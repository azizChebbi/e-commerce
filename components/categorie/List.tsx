import React, { ReactChild, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function List({ children, title }: { children: ReactChild[]; title: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <p onClick={() => setOpen(!open)}>
                <span>{title}</span>
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </p>
            <div className='sidebar-list'>{open && children}</div>
        </div>
    );
}

export default List;
