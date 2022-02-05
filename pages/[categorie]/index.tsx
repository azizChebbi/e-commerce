import { GetStaticPaths, GetStaticProps } from "next";
import React, { RefObject, useEffect, useRef, useState } from "react";
import List from "../../components/categorie/List";
import ListItem from "../../components/categorie/ListItem";
import Layout from "../../containers/Layout";
import { categories } from "../../utils/data";
import Rating from "@mui/material/Rating";
import Product from "../../components/categorie/Product";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = categories.map((item) => {
        return {
            params: {
                categorie: item.categorie,
            },
        };
    });
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
    const categorie = categories.filter((item) => {
        return item.categorie == params.categorie;
    });
    return {
        props: {
            products: categorie[0].products,
            route: params.categorie,
        },
    };
};

interface product {
    img: string;
    title: string;
    rating: number;
    price: number;
}

export default function Home(props: { products: product[]; route: string }) {
    const [width, setWidth] = useState<number>(1000);
    const sidebarRef: RefObject<HTMLInputElement> = useRef(null);
    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);
    const toggle = () => {
        if (sidebarRef.current != null) {
            if (sidebarRef.current.style.display == "none")
                sidebarRef.current.style.display = "block";
            else sidebarRef.current.style.display = "none";
        }
    };
    return (
        <Layout title={"Shopping"}>
            <div>
                <div className='categorie-container'>
                    {width <= 500 && (
                        <span onClick={toggle}>
                            <FilterListOutlinedIcon />
                        </span>
                    )}
                    <div className='sidebar' ref={sidebarRef}>
                        {width <= 500 && (
                            <span onClick={toggle}>
                                <CancelOutlinedIcon fontSize='large' />
                            </span>
                        )}

                        <h2>Filter by</h2>
                        <div>
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
                                <ListItem
                                    label={
                                        <Rating name='read-only' value={1} readOnly size='small' />
                                    }
                                />
                                <ListItem
                                    label={
                                        <Rating name='read-only' value={2} readOnly size='small' />
                                    }
                                />
                                <ListItem
                                    label={
                                        <Rating name='read-only' value={3} readOnly size='small' />
                                    }
                                />
                                <ListItem
                                    label={
                                        <Rating name='read-only' value={4} readOnly size='small' />
                                    }
                                />
                                <ListItem
                                    label={
                                        <Rating name='read-only' value={5} readOnly size='small' />
                                    }
                                />
                            </List>
                            <List title='Condition'>
                                <ListItem label='New' />
                                <ListItem label='used' />
                            </List>
                        </div>
                    </div>
                    <div className='content'>
                        {props.products.map((product, index) => {
                            return (
                                <Product
                                    href={`/products/${props.route + index}`}
                                    img={product.img}
                                    title={product.title}
                                    rating={product.rating}
                                    price={product.price}
                                    key={index}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
