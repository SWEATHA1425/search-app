import React from "react";
import ProductCategory from "./ProductCategory";
import ProductRow from "./ProductRow";

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (!product.name.toLowerCase().includes(filterText.toLowerCase())) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategory category={product.category} key={product.category}/>
      );
    }
    rows.push(
      <ProductRow product={product} key={product.name}/>
    );
    lastCategory = product.category;
  });

  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead className="bg-black-100">
        <tr>
          <th className="border px-4 py-2 text-left">Name</th>
          <th className="border px-4 py-2 text-left">Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;