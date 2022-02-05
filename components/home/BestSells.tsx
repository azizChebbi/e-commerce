import React from "react";
import { categories } from "../../utils/data";
import Image from "next/image";
import Link from "next/link";

function BestSells() {
    return (
        <div className='best-sells'>
            <h2>The best selling products of the last month</h2>
            <div className='image-carousel'>
                {categories.map((item) => (
                    <Link href={`/products/${item.categorie}0`} passHref key={item.categorie}>
                        <div key={item.categorie}>
                            <Image
                                key={item.products[0].img}
                                src={item.products[0].img}
                                objectFit='cover'
                                layout='fill'
                                alt={item.products[0].title}
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default BestSells;
