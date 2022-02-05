import { Button, Rating } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Image from "next/image";

import { CartProduct } from "../../pages/cart/index";
import { useState } from "react";
import { Store } from "../../utils/store";

function CartItem({ cartProduct }: { cartProduct: CartProduct }) {
    const { state, dispatch } = useContext(Store);
    const [quantity, setQuantity] = useState<number>(cartProduct.quantity);
    const quantityChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setQuantity(parseInt(e.target.value));
    };
    const remove = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                categorie: cartProduct.categorie,
                index: cartProduct.index,
            },
        });
    };
    useEffect(() => {
        dispatch({
            type: "SET_QUANTITY",
            payload: {
                categorie: cartProduct.categorie,
                index: cartProduct.index,
                quantity,
            },
        });
    }, [quantity]);

    return (
        <div className='cart-item' key={cartProduct.img}>
            <div>
                <Image
                    src={cartProduct.img}
                    objectFit='contain'
                    layout='fill'
                    alt={`a ${cartProduct.categorie} image`}
                />
            </div>
            <div>
                <p>{cartProduct.title}</p>
                <p>
                    <Rating name='read-only' value={cartProduct.rating} readOnly />
                </p>
                <div>
                    <p>{"$ " + cartProduct.price}</p>
                    <select value={quantity} onChange={quantityChangeHandler}>
                        {Array.from({ length: cartProduct.quantity + 5 }, (_, i) => i + 1).map(
                            (i) => (
                                <option value={i} key={i}>
                                    {i}
                                </option>
                            )
                        )}
                    </select>
                </div>
                <div>
                    <Button color='error' onClick={remove}>
                        Remove
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
