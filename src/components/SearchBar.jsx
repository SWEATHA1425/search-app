import React from "react";

function SearchBar({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}){

    return(
        <form>
            <input type="text" placeholder="search" value={filterText} 
             className="w-full px-3 py-2 border rounded shadow-sm"
            onChange={(e) => onFilterTextChange(e.target.value)} />
            <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={inStockOnly}
                onChange={(e) => onInStockOnlyChange(e.target.checked)} />
                show only avalilable stocks
            </label>
        </form>
    );
}

export default SearchBar;