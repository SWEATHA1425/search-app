import React from "react";

function ProductCategory({category}){
    return(
        <tr>
            <th colSpan="2"
            className="bg-blue-100 text-left px-4 py-2 font-semibold">{category}</th>
        </tr>
    )
}
export default ProductCategory;