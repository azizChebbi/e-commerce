import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";

export interface Props {
    title: string;
    img: string;
    to: string;
}

function Categorie({ title, img, to }: Props) {
    return (
        <div className='categorie'>
            <h2>{title}</h2>
            <div style={{ cursor: "pointer" }}>
                <Link href={to}>
                    <Image src={img} objectFit='cover' layout='fill' alt={title} />
                </Link>
            </div>
            <Link href={to}>Shop now</Link>
        </div>
    );
}

export default Categorie;
