import React from 'react';

function FilterSortControls({ filterGreased, setFilterGreased, sortCriteria, setSortCriteria }) {
  return (
    <div className='filterOptions'>
      <label>
        Greased Only
        <input 
          type="checkbox" 
          checked={filterGreased} 
          onChange={(e) => setFilterGreased(e.target.checked)} 
        />
      </label>

      <label>
        Sort By:
        <select 
          value={sortCriteria} 
          onChange={(e) => setSortCriteria(e.target.value)}
        >
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>
    </div>
  );
}

export default FilterSortControls;