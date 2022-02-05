import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { Store } from "../../utils/store";
import HeadearMenu from "./Menu";
import CustomTooltip from "./CustomizedTooltip";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

function Header() {
    const { state, dispatch } = useContext(Store);
    const [cart, setCart] = useState<number>(0);
    const [darkMode, setDarkMode] = useState<boolean>(false);
    useEffect(() => {
        setCart(state.cart.length);
        setDarkMode(state.darkMode);
    }, [state]);
    const switchMode = () => {
        setDarkMode(!darkMode);
        dispatch({ type: "SWITCH_MODE" });
    };
    return (
        <header>
            <Link href='/'>
                <h1>Mally</h1>
            </Link>
            <form>
                <input type='text' id='search' name='search' placeholder='Search for anything' />
                <span>
                    <SearchIcon fontSize='medium' />
                </span>
            </form>
            <ul>
                <CustomTooltip title='Favorites'>
                    <li>
                        <FavoriteBorderIcon sx={{ fontSize: "30px" }} />
                    </li>
                </CustomTooltip>
                <li>
                    <HeadearMenu />
                </li>
                <CustomTooltip title='Cart'>
                    <li>
                        <Link href='/cart'>
                            <Badge badgeContent={cart} color='warning'>
                                <ShoppingCartOutlinedIcon fontSize='medium' />
                            </Badge>
                        </Link>
                    </li>
                </CustomTooltip>
                <CustomTooltip title='Mode'>
                    <li onClick={switchMode}>
                        {darkMode ? (
                            <DarkModeOutlinedIcon sx={{ fontSize: "30px" }} />
                        ) : (
                            <LightModeOutlinedIcon sx={{ fontSize: "30px" }} />
                        )}
                    </li>
                </CustomTooltip>
            </ul>
        </header>
    );
}

export default Header;
