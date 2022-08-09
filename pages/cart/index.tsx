import { Button, Rating } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import Layout from "../../containers/Layout";
import { Product, Categorie, categories } from "../../utils/data";
import { Store, CartItem as CartItemType } from "../../utils/store";
import CartItem from "../../components/cart/CartItem";
import Link from "next/link";

export interface CartProduct extends Product, CartItemType {}

function PaymentSectionItem({ text, val }: { text: string; val: number }) {
    return (
        <p>
            <span>{text}</span>
            <span>{"$" + val}</span>
        </p>
    );
}

function PaymentSection({
    color,
    text1,
    val1,
    text2,
    val2,
}: {
    color: string;
    text1: string;
    val1: number;
    text2: string;
    val2: number;
}) {
    return (
        <div className='payment-section' style={{ color }}>
            <PaymentSectionItem text={text1} val={val1} />
            <PaymentSectionItem text={text2} val={val2} />
        </div>
    );
}

function getProduct(item: CartItemType): CartProduct {
    const categorie: Categorie = categories.filter(
        (categorie) => categorie.categorie == item.categorie
    )[0];
    const product: Product = categorie.products[item.index];
    return { ...item, ...product };
}

function getTotalPrice(cart: CartItemType[]): number {
    if (cart.length == 0) return 0;
    const reducer = (prev: number, curr: number) => prev + curr;
    const prices: number[] = cart.map((item) => {
        const productItem = getProduct(item);
        return productItem.price * productItem.quantity;
    });
    return prices.reduce(reducer);
}

function Cart() {
    const { state } = useContext(Store);
    const totalPrice = getTotalPrice(state.cart);
    const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

    useEffect(() => {
        setCartProducts(state.cart.map((item: CartItemType) => getProduct(item)));
    }, [state]);

    return (
        <Layout title='Shopping'>
            <div className='cart'>
                <div className='cart-items'>
                    {cartProducts.length == 0 && (
                        <div className='cart-empty'>
                            <div>
                                <h1>Your Cart is empty</h1>
                                <Link href='/'>Add some products to your cart</Link>
                            </div>
                        </div>
                    )}
                    {cartProducts.map((product) => (
                        <CartItem cartProduct={product} key={product.categorie + product.index} />
                    ))}
                </div>
                {cartProducts.length > 0 && (
                    <div className='cart-payment'>
                        <h2>Payment</h2>
                        <PaymentSection
                            color={"black"}
                            text1={"Item(s) Total"}
                            text2={"Shop discount"}
                            val1={Number(totalPrice.toFixed(2))}
                            val2={Number((totalPrice / 4).toFixed(2))}
                        />
                        <PaymentSection
                            color={"#9D9D9D"}
                            text1={"Subtotal"}
                            text2={"Shipping"}
                            val1={Number(((3 * totalPrice) / 4).toFixed(2))}
                            val2={Number(((3 * totalPrice) / 44).toFixed(2))}
                        />
                        <PaymentSectionItem
                            text={`Total(${state.cart.length} item${
                                state.cart.length > 1 ? "s" : ""
                            })`}
                            val={Number(((18 * totalPrice) / 22).toFixed(2))}
                        />
                        <Button variant='contained' color='warning'>
                            Proceed To Checkout
                        </Button>
                    </div>
                )}
            </div>
        </Layout>
    );
}

export default Cart;
