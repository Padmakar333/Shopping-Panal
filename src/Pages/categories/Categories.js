import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Maincategories } from "./Maincategories";
import { Addmaincategory } from "./Addmaincategory";
import { useDispatch } from "react-redux";
import { storeMainCategories, storeSubCategories } from "../../Redux/categoriesSlice";


export function Categories(){
    const dispatch = useDispatch();

    useEffect(() => {
      // Fetch data from API
      dispatch(
        storeMainCategories([
          {
            id: "1",
            category: "Transform LED",
            description: "TRF LED",
            createdAt: "04 March 2024",
          },
          {
            id: "2",
            category: "RFL LED",
            description: "RFL LED",
            createdAt: "04 March 2024",
          },
        ])
      );
      // Fetch data from API
      dispatch(
        storeSubCategories([
          {
            id: "1",
            image:
              "https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.webp",
            subCategory: "Transform LED",
            mainCategory: "Transform LED",
            totalItems: "TRF LED",
            createdAt: "04 March 2024",
          },
        ])
      );
    }, []);
    return (
        <Routes>
                <Route path="/" element={<Maincategories></Maincategories>}></Route>
                <Route path="/add" element={<Addmaincategory></Addmaincategory>}></Route>
        </Routes>
    )
}