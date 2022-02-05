import React from "react";
import Categorie from "./Categorie";
import { categories } from "../../utils/data";

function Categories() {
    return (
        <div className='categories'>
            {categories.map((item) => (
                <Categorie
                    img={item.categorieImage}
                    title={item.title}
                    to={`/${item.categorie}`}
                    key={item.title}
                />
            ))}
        </div>
    );
}

export default Categories;
