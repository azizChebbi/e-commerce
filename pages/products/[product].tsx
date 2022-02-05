import { Button, Rating } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import React, { useContext } from "react";
import Layout from "../../containers/Layout";
import { categories } from "../../utils/data";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Store } from "../../utils/store";

interface paramsType {
    params: {
        product: string;
    };
}
export const getStaticPaths: GetStaticPaths = async () => {
    const pathsArrays: paramsType[][] = categories.map((item) => {
        return item.products.map((_, index) => {
            return {
                params: {
                    product: item.categorie + index,
                },
            };
        });
    });
    var paths: paramsType[] = [];
    pathsArrays.forEach((array) => {
        paths = paths.concat(array);
    });
    return {
        paths,
        fallback: false,
    };
};

interface product {
    img: string;
    title: string;
    rating: number;
    price: number;
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
    console.log(params);
    const n = params.product.length;
    const index = params.product[n - 1];
    const categorie = params.product.substr(0, n - 1);

    let product: product;
    let i = 0;
    for (i; i < categories.length; i++) {
        if (categories[i].categorie == categorie) {
            break;
        }
    }
    product = categories[i].products[index];
    return {
        props: {
            product,
            index,
            categorie,
        },
    };
};

function Product({
    product,
    categorie,
    index,
}: {
    product: product;
    categorie: string;
    index: number;
}) {
    const { state, dispatch } = useContext(Store);
    const handleClick = () => {
        dispatch({ type: "ADD_TO_CART", payload: { categorie, index, quantity: 1 } });
        setTimeout(() => {
            console.log(state.cart);
        }, 200);
    };
    return (
        <Layout title='Shopping'>
            <div className='product-details'>
                <div>
                    <div className='image'>
                        <Image
                            src={product.img}
                            objectFit='contain'
                            layout='fill'
                            alt={product.title}
                        />
                    </div>
                </div>
                <div>
                    <h3>{product.title}</h3>
                    <p className='rating'>
                        <Rating name='read-only' value={product.rating} readOnly size='small' />
                    </p>

                    <p className='price'>Price: ${product.price}</p>
                    <p className='shipping'>
                        <span>${(product.price / 13).toFixed(2)}</span> Shipping & Import Fees
                        Deposit to your location
                    </p>
                    <div className='details'>
                        <h3>Product details</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
                            mollitia in officia nulla architecto, et nihil illum labore deserunt
                            explicabo sequi temporibus quos eligendi ducimus fugit distinctio
                            delectus aut ullam! Perferendis optio qui nulla corrupti, nam amet.
                            Perspiciatis enim, quisquam obcaecati sapiente hic tempore veritatis non
                        </p>
                    </div>
                    <Button variant='contained' color='warning' onClick={handleClick}>
                        <span>Add to cart</span>
                        <ShoppingCartOutlinedIcon />
                    </Button>
                </div>
            </div>
        </Layout>
    );
}

export default Product;
