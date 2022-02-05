import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import List from "./List";
import ListItem from "./ListItem";
import { Rating } from "@mui/material";

type Anchor = "top";

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }

            setState({ ...state, [anchor]: open });
        };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: "auto" }}
            role='presentation'
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className='sidebar'>
                <h2>Filter by</h2>
                <List title='Brand'>
                    <ListItem label='Adidas' />
                    <ListItem label='Nike' />
                    <ListItem label='Puma' />
                    <ListItem label='New Balance ' />
                </List>
                <List title='Price'>
                    <ListItem label='Under $25' />
                    <ListItem label='$25 to $50' />
                    <ListItem label='$50 to $100' />
                    <ListItem label='$100 to $150' />
                    <ListItem label='$150 to $200' />
                    <ListItem label='$200 & Above' />
                </List>
                <List title='Size'>
                    <ListItem label='XS' />
                    <ListItem label='S' />
                    <ListItem label='M' />
                    <ListItem label='L' />
                    <ListItem label='XL' />
                </List>
                <List title='Discount'>
                    <ListItem label='50% or more' />
                    <ListItem label='40% or more' />
                    <ListItem label='30% or more' />
                    <ListItem label='20% or more' />
                    <ListItem label='10% or more' />
                </List>
                <List title='Rating'>
                    <ListItem label={<Rating name='read-only' value={1} readOnly size='small' />} />
                    <ListItem label={<Rating name='read-only' value={2} readOnly size='small' />} />
                    <ListItem label={<Rating name='read-only' value={3} readOnly size='small' />} />
                    <ListItem label={<Rating name='read-only' value={4} readOnly size='small' />} />
                    <ListItem label={<Rating name='read-only' value={5} readOnly size='small' />} />
                </List>
                <List title='Condition'>
                    <ListItem label='New' />
                    <ListItem label='used' />
                </List>
            </div>
        </Box>
    );

    return (
        <div>
            {(["top"] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
