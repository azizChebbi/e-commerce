import React, { createContext, useReducer, ReactChild } from "react";
import Cookies from "js-cookie";

export interface CartItem {
    categorie: string;
    index: number;
    quantity: number;
}
export interface favoritesItem {
    categorie: string;
    index: number;
}

interface State {
    cart: CartItem[];
    favorites: favoritesItem[];
    darkMode: boolean;
}
interface Action {
    type: string;
    payload: CartItem;
}
interface Provider {
    children: ReactChild;
}
const initialState: State = {
    cart: (() => {
        let c: any = Cookies.get("cart");

        if (typeof c === "string") {
            console.log(JSON.parse(c));
            return JSON.parse(c);
        }
        return [];
    })(),
    favorites: [],
    darkMode: (() => {
        let d: any = Cookies.get("darkMode");
        if (typeof d !== "undefined") {
            //d = JSON.parse(d);
            if (d == "light") return false;
            return true;
        }
        Cookies.set("darkMode", "light");
        return false;
    })(),
};

export const Store = createContext<State | any>(null);

function reducer(state: State = initialState, action: Action): State {
    let cart = state.cart;
    switch (action.type) {
        case "ADD_TO_CART":
            let ok: boolean = false;
            let j = 0;
            for (j; j < cart.length; j++) {
                if (
                    cart[j].categorie == action.payload.categorie &&
                    cart[j].index == action.payload.index
                ) {
                    ok = true;
                    break;
                }
            }
            if (!ok) cart.push(action.payload);
            else cart[j].quantity += 1;
            Cookies.set("cart", JSON.stringify(cart));
            return {
                ...state,
                cart,
            };
        case "REMOVE_FROM_CART":
            cart = cart.filter((item) => {
                return (
                    item.categorie != action.payload.categorie || item.index != action.payload.index
                );
            });
            Cookies.set("cart", JSON.stringify(cart));
            return {
                ...state,
                cart,
            };
        case "SET_QUANTITY":
            let i = 0;
            for (i; i < cart.length; i++) {
                if (
                    cart[i].categorie == action.payload.categorie &&
                    cart[i].index == action.payload.index
                ) {
                    break;
                }
            }
            cart[i].quantity = action.payload.quantity;
            Cookies.set("cart", JSON.stringify(cart));
            return {
                ...state,
                cart,
            };
        case "SWITCH_MODE":
            if (state.darkMode == false) Cookies.set("darkMode", "dark");
            else Cookies.set("darkMode", "light");
            return {
                ...state,
                darkMode: !state.darkMode,
            };
        default:
            return state;
    }
}

export function StoreProvider(props: Provider): any {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value: any = { state, dispatch };
    return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
