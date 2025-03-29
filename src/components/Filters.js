const Filters = ({setFilterQuery, ShowFilters}) => {
    function handleFilterChange(e){
        const {value, checked} = e.target;
        setFilterQuery((prevFilter) => checked ? [...prevFilter, value] : prevFilter.filter((item) => item !== value));
    }
    return <>
        <div className={`filterSidebar ${ShowFilters ? "show" : "hide"}`}> 
            <div className="filterDiv">
                <h3 className="filterBy">Color</h3>
                <label><input type="checkbox" value="Red" onChange={handleFilterChange} />Red</label>
                <label><input type="checkbox" value="Blue" onChange={handleFilterChange}  />Blue</label>
                <label><input type="checkbox" value="Green" onChange={handleFilterChange}  />Green</label>
            </div>
            <div className="filterDiv">
                <h3 className="filterBy">Gender</h3>
                <label><input type="checkbox" value="Men" onChange={handleFilterChange}  />Men</label>
                <label><input type="checkbox" value="Women" onChange={handleFilterChange}  />Women</label>
            </div>
            <div className="filterDiv">
                <h3 className="filterBy">Price</h3>
                <label><input type="checkbox" value="0-250" onChange={handleFilterChange}  />0-Rs250</label>
                <label><input type="checkbox" value="251-450" onChange={handleFilterChange}  />Rs251-450</label>
                <label><input type="checkbox" value="450" onChange={handleFilterChange}  />Rs450</label>
            </div>
            <div className="filterDiv">
                <h3 className="filterBy">Type</h3>
                <label><input type="checkbox" value="Polo" onChange={handleFilterChange} />Polo</label>
                <label><input type="checkbox" value="Hoodie" onChange={handleFilterChange} />Hoodie</label>
                <label><input type="checkbox" value="Basic" onChange={handleFilterChange} />Basic</label>
            </div>
        </div>
    </>
}

export default Filters;