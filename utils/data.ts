export interface Product {
    img: string;
    title: string;
    rating: number;
    price: number;
}

export interface Categorie {
    categorie: string;
    categorieImage: string;
    title: string;
    products: Product[];
}

export const categories: Categorie[] = [
    {
        categorie: "clothes",
        categorieImage: "/images/categories/clothe/clothes.jpg",
        title: "Clothes & styles",
        products: [
            {
                img: "/images/categories/clothe/image1.jpg",
                title: "Mens Shoes - Air Jordan 1 Low - White - Basketball",
                rating: 3.5,
                price: 50.21,
            },
            {
                img: "/images/categories/clothe/image2.jpg",
                title: "Black Leather Jacket with Hood Mens | Bomber Style",
                rating: 4,
                price: 95.35,
            },
            {
                img: "/images/categories/clothe/image3.jpg",
                title: "Men's Essentials Kendal Tailored Fit Trousers, Black Twill",
                rating: 3,
                price: 110.88,
            },
            {
                img: "/images/categories/clothe/image4.jpg",
                title: "WATI B - BONNET BLACK M NOIR LOGO WATIB BLANC - Booska'Shop",
                rating: 2,
                price: 34.14,
            },
            {
                img: "/images/categories/clothe/image5.jpg",
                title: "Kids Clothes For Sale 2T-4T in Kingston, Jamaica Kingston St Andrew - Kids Clothes",
                rating: 3.5,
                price: 72.65,
            },
        ],
    },
    {
        categorie: "gaming",
        categorieImage: "/images/categories/gaming/gaming.jpg",
        title: "Gaming",
        products: [
            {
                img: "/images/categories/gaming/image1.jpg",
                title: "Dell Computer Central Processing Unit, Rs 3800 /piece APS IT Solution",
                rating: 3.5,
                price: 1050.32,
            },
            {
                img: "/images/categories/gaming/image2.jpg",
                title: "MSI GT80S 6QE Gaming Laptop Review - GT80S Will Test Every Player",
                rating: 4,
                price: 2150,
            },
            {
                img: "/images/categories/gaming/image3.jpg",
                title: "ELECWISH Racing Style Reclining Gaming Chair High Back Large Size Ergonomic Adjustable Swivel",
                rating: 2,
                price: 320.15,
            },
            {
                img: "/images/categories/gaming/image4.jpg",
                title: "RGB One Hand Keyboard, TSV Gaming Keyboard Single-Handed 35 Keys for PC, Portable Mini Left Hand ",
                rating: 5,
                price: 212.84,
            },
            {
                img: "/images/categories/gaming/image5.jpg",
                title: "TSV Gaming Mouse Wired, USB Optical Computer Mice with RGB Backlit, 4 Adjustable DPI",
                rating: 3,
                price: 72.43,
            },
            {
                img: "/images/categories/gaming/image6.jpg",
                title: "MSI Optix MPG27CQ 27 16:9 Curved FreeSync LCD OPTIX MPG27CQ B&H",
                rating: 5,
                price: 1050.7,
            },
        ],
    },
    {
        categorie: "home",
        categorieImage: "/images/categories/house/home.jpg",
        title: "Home & office",
        products: [
            {
                img: "/images/categories/house/image1.jpg",
                title: "The Ultimate Bed With Integrated Massage Chair, Speaker and Desk",
                rating: 3.5,
                price: 2140,
            },
            {
                img: "/images/categories/house/image3.jpg",
                title: "American Country Style Modern Designs White Wooden Dressing Table",
                rating: 5,
                price: 173.15,
            },
            {
                img: "/images/categories/house/image2.jpg",
                title: "Nilkamal Teana Bed Side Table (Classic Walnut)",
                rating: 3.5,
                price: 50,
            },

            {
                img: "/images/categories/house/image4.jpg",
                title: "55 Inch Cheapest Android Led Tv 4k Television - Buy Led Television,Cheapest Led Tv,Android 4k Television Product",
                rating: 2.4,
                price: 578.57,
            },
            {
                img: "/images/categories/house/image5.jpg",
                title: "Bedroom Decor Home Picture Photo Poster Frames Wall Frame",
                rating: 3,
                price: 146.32,
            },
            {
                img: "/images/categories/house/image6.jpg",
                title: "Beige & Brown Set of 2 Window Curtains",
                rating: 3.5,
                price: 69.4,
            },
        ],
    },
    {
        categorie: "sports",
        categorieImage: "/images/categories/sport/sports.jpg",
        title: "Sports & fitness",
        products: [
            {
                img: "/images/categories/sport/image1.jpg",
                title: "SOVNIA Stationary Bikes, Fitness Bike with iPad Holder, LCD Monitor and Comfortable Seat Cushion",
                rating: 3.5,
                price: 50,
            },
            {
                img: "/images/categories/sport/image2.jpg",
                title: "Workout Gym Equipment Weights Adjustable Dumbbells",
                rating: 3,
                price: 54,
            },
            {
                img: "/images/categories/sport/image3.jpg",
                title: "Buy Exercise Bike, SOVNIA Stationary Bikes, Fitness Bike with iPad Holder, LCD Monitor and Comfortable Seat Cushion",
                rating: 3.5,
                price: 50,
            },
            {
                img: "/images/categories/sport/image4.jpg",
                title: "Buy Exercise Bike, SOVNIA Stationary Bikes, Fitness Bike with iPad Holder, LCD Monitor and Comfortable Seat Cushion",
                rating: 3.5,
                price: 50,
            },
            {
                img: "/images/categories/sport/image5.jpg",
                title: "Three In One Exercise Bench, Gym Bench, Weight Lifting Bench, Fitness Benches, Dumbbell Benches",
                rating: 3.5,
                price: 197.53,
            },
            {
                img: "/images/categories/sport/image6.jpg",
                title: "Weight plates 2pcs Cast Steel Barbell Weight Plate Rubber Skin Pattern 5cm Hole Olympic Dumbbell Weight Plates for Home",
                rating: 5,
                price: 55.5,
            },
        ],
    },
    {
        categorie: "computers",
        categorieImage: "/images/categories/computer/computers.jpg",
        title: "Computers",
        products: [
            {
                img: "/images/categories/computer/image1.jpg",
                title: "AMD Ryzen 5 3rd Gen - RYZEN 5 3600 Matisse (Zen 2) 6-Core 3.6 GHz (4.2 GHz Max Boost) Socket AM4 65W",
                rating: 4,
                price: 249.99,
            },
            {
                img: "/images/categories/computer/image2.jpg",
                title: "Best Buy: Apple 21.5' iMac® with Retina 4K display Intel Core i5 8GB Memory 1TB Hard Drive Silver MK452LL/A",
                rating: 5,
                price: 2340.84,
            },
            {
                img: "/images/categories/computer/image3.jpg",
                title: "Gigabyte Nvidia Geforce Rtx 3060 Ti Eagle 8g Gaming Graphics Card Support Amd 5 5600x 9 5900x",
                rating: 5,
                price: 629.9,
            },
            {
                img: "/images/categories/computer/image4.jpg",
                title: "Asus ROG Delta White Edition Gaming Headset (PC/PS4/Switch)",
                rating: 3,
                price: 179.5,
            },
            {
                img: "/images/categories/computer/image5.jpg",
                title: "Full Web Cameras for Computers with Microphone, Adjustable HD 720P Video Conferencing Computer USB",
                rating: 2,
                price: 80.5,
            },
            {
                img: "/images/categories/computer/image6.jpg",
                title: "HP Tango Smart Multi-Function Wireless Printer",
                rating: 1,
                price: 100,
            },
        ],
    },
    {
        categorie: "babies",
        categorieImage: "/images/categories/baby/baby.jpg",
        title: "Baby toys",
        products: [
            {
                img: "/images/categories/baby/image1.jpg",
                title: "Buy Wooden Toddler Puzzles for 1-3 Years Old – 3 Puzzles for Kids Ages 2-4 ",
                rating: 3.5,
                price: 50,
            },
            {
                img: "/images/categories/baby/image2.jpg",
                title: "Newborn Girls Clothes Baby Romper Outfit Pants Set Long Sleeve Toddler Infant Winter Clothing ",
                rating: 1,
                price: 76.4,
            },
            {
                img: "/images/categories/baby/image3.jpg",
                title: "Litand Soft Stacking Blocks for Baby Montessori Sensory Infant Bath Toys Toddlee Toddlers Babies 6 9 Month 1 2 Year Old ",
                rating: 4,
                price: 15.64,
            },
            {
                img: "/images/categories/baby/image4.jpg",
                title: "TruBliss™ Sweetli® Deluxe Bassinet in Stonewash | Bed Bath & Beyond ",
                rating: 3.5,
                price: 99.99,
            },
            {
                img: "/images/categories/baby/image5.jpg",
                title: "Buy Bambiya Baby Crib Mobile with Lights, Soothing Music, Remote Control and Light Projector with Stars ",
                rating: 3.5,
                price: 78.31,
            },
        ],
    },
    {
        categorie: "garden",
        categorieImage: "/images/categories/garden/garden.jpg",
        title: "Enjoy your garden",
        products: [
            {
                img: "/images/categories/garden/image1.jpg",
                title: "TCJJ 51 Pieces Miniature Fairy Garden Accessories, Fairy Garden Kit...",
                rating: 3.5,
                price: 50,
            },
            {
                img: "/images/categories/garden/image2.jpg",
                title: "30' Lawn Striping System | Lawn Mower Striping Kit | Toro",
                rating: 3,
                price: 214.6,
            },

            {
                img: "/images/categories/garden/image3.jpg",
                title: "Indoor & Outdoor Waterproof Artificial Grass Turf Lawn Fake",
                rating: 1,
                price: 20.5,
            },
            {
                img: "/images/categories/garden/image4.jpg",
                title: "Buy 100 ft Expandable Garden Hose,100 Feet Leakproof",
                rating: 3,
                price: 120,
            },
            {
                img: "/images/categories/garden/image5.jpg",
                title: "Expanding Wooden Garden Wall Fence Panel Plant Climb Trellis partition Decorative Garden Fence for Home Yard Garden",
                rating: 4,
                price: 15,
            },
            {
                img: "/images/categories/garden/image6.jpg",
                title: "Realmote 14 tooth rake hay deciduous rake pine soil rake garden",
                rating: 1,
                price: 20.5,
            },
        ],
    },
];
