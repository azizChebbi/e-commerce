import Image from "next/image";
import React from "react";

function Ads() {
    return (
        <div className='ads'>
            <div>
                <Image
                    src='/images/ads/delivery.jpg'
                    objectFit='cover'
                    layout='fill'
                    alt='delivery advertisement'
                />
            </div>
            <div>
                <Image
                    src='/images/ads/discount.jpg'
                    objectFit='cover'
                    layout='fill'
                    alt='discount advertisement'
                />
            </div>
        </div>
    );
}

export default Ads;
