import React, {useState} from 'react';
import Menu from "../Menu";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MenuItems from './MenuItems';
import CategoryMenu from './CategoryMenu';

const allCatValues = [ ...new Set(Menu.map((currEle) => currEle.category)), "all"];
console.log(allCatValues);

const Gallery = () => {
    const [items, setitems] = useState(Menu);
    const [categoryItem, setcategoryItem] = useState(allCatValues)

    const filterItem = (categItem) => {

        if( categItem === "all") {
            setitems(Menu);
            return;
        }

        const updatedItem = Menu.filter((element) => {
            return element.category === categItem;
        });
        setitems(updatedItem);
    }

    return (
        <>
            <h1 className="mt-5 text-center main-heading">Order Your Favourite Dish</h1>
            <hr></hr>

            {/* my main list section */}
            <CategoryMenu filterItem={filterItem} categoryItem={categoryItem}/>
            

            {/* my main item section */}
            <MenuItems items={items}/>

        </>
    )
}

export default Gallery;
