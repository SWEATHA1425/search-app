import { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import UseReff from './UseReff';

function FilterTable(){
    const [filterText, setFilterText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);
    const PRODUCTS = [
      { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
      { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
      { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
      { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
      { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
      { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ];
    return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>product filter</h1>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly} />

      <ProductTable 
        products={PRODUCTS}
        filterText={filterText}
        inStockOnly={inStockOnly} />
      <UseReff />
    </div>

  );
 
}
export default FilterTable;