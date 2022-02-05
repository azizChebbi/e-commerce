import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Image from "next/image";

interface itemProps {
    item: {
        img: string;
    };
}

function ImageCarousel() {
    var items = [
        {
            img: "/images/carousel/image1.jpg",
        },
        {
            img: "/images/carousel/image2.jpg",
        },
        {
            img: "/images/carousel/image3.jpg",
        },
        {
            img: "/images/carousel/image4.jpg",
        },
    ];

    return (
        <div className='carousel'>
            <Carousel
                animation='slide'
                navButtonsWrapperProps={{
                    // Move the buttons to the bottom. Unsetting top here to override default style.
                    style: {
                        top: "-300",
                        bottom: "unset",
                    },
                }}
            >
                {items.map((item, i) => (
                    <Item key={i} item={item} />
                ))}
            </Carousel>
        </div>
    );
}

function Item(props: itemProps) {
    return (
        <div className='carousel-item'>
            <img src={props.item.img} />
        </div>
    );
}

export default ImageCarousel;
