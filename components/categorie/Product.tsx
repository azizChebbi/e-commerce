import { Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface productProps {
    img: string;
    title: string;
    rating: number;
    price: number;
    href: string;
}
const Product: React.FC<productProps> = ({ img, title, rating, price, href }) => {
    return (
        <div className='categorie-product'>
            {
                <span>
                    <FavoriteBorderIcon fontSize='small' />
                </span>
            }

            <div className='image-container'>
                <Link href={href}>
                    <Image src={img} objectFit='contain' layout='fill' alt={title} />
                </Link>
            </div>
            <div className='details'>
                <Link href={href}>
                    <>
                        <p>{title}</p>
                        <Rating name='read-only' value={rating} readOnly />
                        <p>{"$" + price}</p>
                    </>
                </Link>
            </div>
        </div>
    );
};

export default Product;
